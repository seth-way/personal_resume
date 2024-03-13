<h1 align=center>🚀 Developer's Portfolio  🚀<br><br><img alt='landing page' src='https://lh3.googleusercontent.com/drive-viewer/AKGpihasWiRHIzXcwAyWaqwJ841QUWUMDRqGNIqQ8sEEi5ULKKPFF8HQRlQFQQawa1KRRBwDTuignIqK5B1kQc3vmL8FK8Zqog=s1600'></h1>

<table align='center'>
  <tr>
    <th>The All-in-One Online Portfolio for Coders</th>
  </tr>
</table>

<p align='center'>
  <a href='#purpose'><strong>Purpose</strong></a> ·
  <a href='#features'><strong>Features</strong></a> ·
  <a href='#setup'><strong>Set Up</strong></a> ·
  <a href='#customize'><strong>Customize</strong></a> ·
  <a href='#deploy'><strong>Deploy</strong></a>
</p>
<p>Check out a <a href='https://www.sethway.co' target='_blank'>live demo!</a></p>

<h2 id='purpose'>Purpose ✨</h2>

This clean, single-page web-app lets anyone easily build & deploy their own stunning online portfolio to showcase their coding skills and experience.

<h2 id='features'>Features ✨</h2>

- Easy to Use: No coding experience required! Simply fill in the resumeData.json with your own information & the app will be entirely unique to you!

- Quick & Easy Deployment: [Next.js](https://nextjs.org) App Router requires no setup!

- Mobile-Friendly Design: Your portfolio will look fantastic on any device, from desktops to smartphones.

- Host your resume details & make a pdf version available for download to potential recruiters.

- Display your coding projects with this app's clean and responsive [react-slick](https://react-slick.neostack.com/) carousel.

- Allow recruiters & other visitors to contact your email directly from the site using [the emailJS](https://www.emailjs.com/) API!

<details><summary><h2 id='setup'>Set Up ✨</h2></summary>

1. Prerequisites:

   - Node.js and npm (or yarn) installed on your system.
   - You can find installation instructions at <https://nodejs.org/en>

2. Clone the Repository:

   Bash:

   ```sh
   git clone https://github.com/seth-way/developers_portfolio.git
   ```

3. Install Dependencies:

   Bash:

   ```sh
   cd developers_portfolio
   npm ci
   ```

   Yarn users, try...

   ```sh
   rm -rf node_modules && yarn install --immutable --immutable-cache --check-cache
   ```

4. Run the Development Server:

   Bash:

   ```sh
   npm run dev
   ```

   > [!NOTE]
   > This will start the development server and open your portfolio in your web browser at <http://localhost:3000> by default.

</details>

<details><summary><h2 id='customize'>Customize ✨</h2></summary>
  
- <h3>Basics</h3>

1. Locate <em>`resumeData.json`</em> found in the projects <em>`public/`</em> folder.

2. Update this file to suit your needs. A copy of your resume may be helpful for this part.

   > [!TIP]
   > There is also a file named <a href='https://github.com/seth-way/developers_portfolio/blob/main/public/resumeData.ts'>resumeData.ts</a> in the public folder. There, I've included some helpful <em>types</em> and examples if you have any questions about filling this out.

3. Replace <em>`headShot.jpg`</em> in the <em>`public/images/`</em> folder with your own headshot. Feel free to use a high resolution file because Next.js will scale these images on the server-side to save on load times.

- <h3>Projects</h3>

  1. For each project you add, include a markdown with a description of the project in the <em>`public/markdowns/`</em> folder.

     > [!TIP]
     > If you have not completed enough projects, and want to skip this or any other section of the portfolio, you can do so in the <em>`app/page.tsx`</em> file. Simply comment out the section you like to discard from the <em>`sections`</em> array, and it won't be included in the app.
     >
     > ```diff
     >  const sections: KeyAndComponent[] = [
     >      ['HOME', AboveTheFold],
     >      ['ABOUT', About],
     >      ['RESUME', Resume],
     > -    ['PROJECTS', Projects],
     > +  //['PROJECTS', Projects],
     >      ['SKILLS', Skills],
     >      ['CONTACT', Contact],
     >  ];
     > ```

  2. Keep images for these markdowns in the <em>`public/images/`</em> folder

- <h3>Contact Form</h3>

  1. Visitors are able to fill out the contact form and send emails directly to your mailbox through the free email delivery service <a href='https://www.emailjs.com/' target='_blank'>EmailJS</a>. Sign up for a free account, add a <a href='https://www.emailjs.com/docs/tutorial/adding-email-service/' target='_blank'>personal email service</a>, and create a <a href='https://www.emailjs.com/docs/tutorial/creating-email-template/' target='_blank'>template</a>.

     > [!WARNING]
     > Make sure your template includes a variable called `name`, `subject`, `email`, and `message` to store the senders information.

     > [!TIP]
     > If you'd like to skip this step, you can do so in the <em>app/page.tsx</em> file by commenting out the <em>`CONTACT`</em> section from the <em>`sections`</em> array. Users will be unable to contact you through the app.

  2. Create a <em>`.env.local`</em> in the root directory & create the following variables:

     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - Your secret key and id's can be found on your EmailJS account. Don't share these strings publicly.

</details>

<details><summary><h2 id='deploy'>Deploy ✨</h2></summary>

- This project was built using the [Next.js](https://nextjs.org) React framework. This inherently works well with a deployment on [Vercel's](https://vercel.com/home) platform. They can provide a free & easy deployment in minutes, all on your own custom url.

- I would recommend authorizing your vercel instance to have access to your forked Gihub Repo. This will allow you to link future deployments to any updates you make on the `main` branch.

  > [!WARNING]
  > Don't forget to add the variables from your `.env.local` file as environment variables on your Vercel app. Otherwise, your app will no longer have access to these variables.

- Feel free to work with other hosting providers if you prefer, but be aware that each service may present its own set of challenges.

</details>

<h4>Contributing:</h4>
I'd welcome any contributions to this project! If you have any ideas for improvements or bug fixes, please feel free to open a pull request.

<h4>Bug Reporting:</h4>
If you encounter any bugs while using this application, please create an issue on the GitHub repository.

<h4>License:</h4>
This project is licensed under the MIT License.

<br><br><br>

![GitHub forks](https://img.shields.io/github/forks/seth-way/developers_portfolio?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/seth-way/developers_portfolio?style=for-the-badge)

<p align='center'>Happy Coding!</p>
