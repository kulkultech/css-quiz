import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import { rhythm } from '../utils/typography';
import {
  persistAnswer,
  getPersistedAnswer,
  clearPersistedAnswer
} from '../utils/persistAnswers';
import { Button, Form, Grid } from 'semantic-ui-react';
import { gaTrackAnswer } from '../utils/gaAnswerTracking';

const QuestionTemplate = props => {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;

  const {
    selectedAnswer: selectedAnswerFromStorage
  } = getPersistedAnswer(title);

  const [selectedAnswer, setSelectedAnswer] = useState(
    selectedAnswerFromStorage
  );
  const [submittedAnswer, setSubmittedAnswer] = useState(
    selectedAnswerFromStorage
  );

  const [postContent, explanationContent] = post.html.split(
    '<!-- explanation -->'
  );
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  let correct;
  const answers = post.frontmatter.answers.map(answer => {
    if (answer.search('// correct') > -1) {
      answer = answer.split('// correct')[0].trim();
      correct = answer;
    }
    return answer;
  });

  const clearAnswer = () => {
    setSelectedAnswer(null);
    setSubmittedAnswer(null);
    clearPersistedAnswer(title);
  };

  useEffect(() => {
    if (selectedAnswer) {
      persistAnswer(title, selectedAnswer, correct);
    }
  }, [selectedAnswer, correct, title]);

  const buttonText =
    submittedAnswer === null
      ? 'Submit'
      : submittedAnswer === correct
      ? 'Correct!'
      : 'Incorrect';

  return (
    <Layout location={props.location} title={siteTitle}>
      <Grid
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          marginTop: '20px'
        }}
      >
        <Grid.Column>
          <article>
            <header>
              <h2
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 15
                }}
              >
                {post.frontmatter.title}
              </h2>
            </header>
            <Form size="large">
              <section
                dangerouslySetInnerHTML={{
                  __html: postContent
                }}
              />

              <h3>Select one:</h3>
              {answers.map(answer => (
                <div
                  key={answer}
                  style={{
                    marginBottom: 8,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    id={answer}
                    onClick={() => {
                      setSelectedAnswer(answer);
                    }}
                    checked={selectedAnswer === answer}
                    disabled={submittedAnswer !== null}
                    onChange={() => {}}
                  />
                  <label
                    style={{
                      fontSize: 14,
                      marginLeft: '8px',
                      lineHeight: 1.8
                    }}
                    key={answer}
                    htmlFor={answer}
                  >
                    {answer}
                    {answer === correct &&
                      submittedAnswer !== null && (
                        <React.Fragment>
                          <i
                            style={{ marginLeft: 16 }}
                            className="long arrow alternate left icon"
                          ></i>
                          Correct answers
                        </React.Fragment>
                      )}
                  </label>
                </div>
              ))}
              <br />
              <Button
                color={
                  submittedAnswer === null
                    ? 'blue'
                    : submittedAnswer === correct
                    ? 'green'
                    : 'red'
                }
                fluid
                size="large"
                onClick={() => {
                  gaTrackAnswer(
                    title,
                    selectedAnswer,
                    correct
                  );
                  setSubmittedAnswer(selectedAnswer);
                }}
                disabled={
                  selectedAnswer === null ||
                  submittedAnswer !== null
                }
              >
                {buttonText}
              </Button>
            </Form>
            {submittedAnswer !== null && (
              <React.Fragment>
                <h3>Explanation:</h3>
                <section
                  dangerouslySetInnerHTML={{
                    __html: explanationContent
                  }}
                />
              </React.Fragment>
            )}

            {submittedAnswer !== null && (
              <React.Fragment>
                <br />
                <Button
                  onClick={() => {
                    window.confirm(
                      'Are you sure you want to clear your answer for this question?'
                    ) && clearAnswer();
                  }}
                  className="ui red basic button"
                >
                  Clear My answer
                </Button>
              </React.Fragment>
            )}
          </article>
        </Grid.Column>
      </Grid>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: '15px 15px 10px 15px',
            margin: '30px -14px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          <li>
            {next && (
              <Link to={next.fields.slug} rel="prev">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="next">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default QuestionTemplate;

export const pageQuery = graphql`
  query QuestionBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        answers
        date
      }
    }
  }
`;
