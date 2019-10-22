[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
[![GitHub issues](https://img.shields.io/github/issues/fameweka/css-quiz)](https://github.com/fameweka/css-quiz/issues) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 
[![GitHub forks](https://img.shields.io/github/forks/fameweka/css-quiz)](https://github.com/fameweka/css-quiz/network) 
[![GitHub stars](https://img.shields.io/github/stars/fameweka/css-quiz)](https://github.com/fameweka/css-quiz/stargazers) 
[![GitHub license](https://img.shields.io/github/license/fameweka/css-quiz)](https://github.com/fameweka/css-quiz/blob/master/LICENSE)

<br />

<div>Learn CSS fundamentals through fun and challenging quizzes! :smiley:</div>

<hr />

### :rocket: How to run the app locally

In order to use this app locally, the package manager _yarn_ needs to be installed

If you don't have it installed yet, head over to:

:point_right: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

and install the latest yarn version for your system.

#### 1. Clone the repo

:horse_racing: Run this command to clone the repo, it shall install the app locally and change to its directory automatically:

`git clone https://github.com/fameweka/css-quiz.git fameweka-css-quizzes && cd $_`

#### 2. Install dependencies

First, before you can use the app, you have to run this command to install all the dependencies:

`yarn install`

#### 3. Start and view the app :eyes:

After you've installed all the dependencies, run this command to start the app:

`yarn start` :horse_racing:

Then, in your browser, open http://localhost:8000/ to view it! :tada: :tada:

### :construction: Contributing

I invite you to contribute to this repository! You can do so by opening an issue, or by directly contributing questions.

To directly contribute a quiz question, do the following:

1. Fork the repository :fork_and_knife:
2. In terminal run `yarn install`
3. For creating new question run `yarn new-question %your_question_name%`
   (Note `%your_question_name%` should be lowercased with words separated with dash `-`)
4. Open file `index.md` in directory `content/questions/%your_question_name%` and fill all fields.

If you have any questions, let me know!

### :clipboard: About the app

The app was bootstrapped using the `gatsby-starter-blog` template and then massaging it into a format conducive to quizzing.

### css-quiz

Up to the challenge? Take the quiz? Enjoyed the quiz? Contribute to the questions

### Deployment

Run below command to deploy to gh-pages.

```bash
npm run deploy
```

### ✨Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://bukanme.me/"><img src="https://avatars1.githubusercontent.com/u/11813607?v=4" width="100px;" alt="mpj"/><br /><sub><b>mpj</b></sub></a><br /><a href="#infra-empeje" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://urmauur.com"><img src="https://avatars2.githubusercontent.com/u/10354610?v=4" width="100px;" alt="Faisal Amir"/><br /><sub><b>Faisal Amir</b></sub></a><br /><a href="https://github.com/fameweka/css-quiz/commits?author=urmauur" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nold2"><img src="https://avatars2.githubusercontent.com/u/22978812?v=4" width="100px;" alt="Arnold Sebastian"/><br /><sub><b>Arnold Sebastian</b></sub></a><br /><a href="https://github.com/fameweka/css-quiz/commits?author=nold2" title="Code">💻</a></td>
    <td align="center"><a href="https://djuanit0x.github.io/"><img src="https://avatars2.githubusercontent.com/u/38167041?v=4" width="100px;" alt="Dennis Juanito"/><br /><sub><b>Dennis Juanito</b></sub></a><br /><a href="#content-djuanit0x" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.ruslan.id"><img src="https://avatars0.githubusercontent.com/u/10227159?s=460&v=4" width="100px;" alt="Alan Sarluv"/><br /><sub><b>Alan Sarluv</b></sub></a><br /><a href="#content-alansarluv" title="Content">🖋</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
