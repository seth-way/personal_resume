interface Data {
  main: Main;
  resume: Resume;
  portfolio: Portfolio;
}

interface Main {
  name: string; // ex. "Seth Way"
  description: string; // brief 1-2 sentences describing yourself
  image: string; // feel free to use "headShot.jpg" but make sure this is the SAME NAME AS YOUR PROFILE PIC
  bio: string; // shortened elevator pitch, 4-5 sentences
  contactmessage: string; // 1-2 sentences inviting feedback
  email: string;
  phone: string;
  github: string; // full link to your github, ex. "https://github.com/seth-way"
  linkedIn: string; // full link to your linkedIn, ex. "https://www.linkedin.com/in/sethway"
  address: Address; // single Address object
}

interface Address {
  city: string;
  state: string;
}

interface Resume {
  skillMessage: string; // if you'd like to preface your skills section with a message,
  education: Education[]; // otherwise feel free to leave it blank
  work: Work[];
  skills: Skill[];
}

interface Education {
  school: string; // each section of you Education must have each of the follow components.
  degree: string; // Include as many as you feel are relevant.
  graduated: string;
  description: string; // descriptions should mostly mirror what is found on your resume and
  // should be no longer than 2-3 sentences
}

interface Work {
  company: string; // work is vary similar to Education.
  title: string;
  years: string;
  description: string;
}

interface Skill {
  skill: string; // Include skills and techs you've worked with
  value: number; // each skill should come with a number 'value', between 1 and 100.
  // This will directly effect the size of the rendering.
}

interface Portfolio {
  projects: Project[];
}

interface Project {
  title: string; // include info about some of the projects that youre proud of!
  description: string; // we will also need to create a .md file for each project
  filename: string; // and match
  url: string; // so that you can explain it in more detail
  // ** Be sure to keep the description short and concise of it will overflow the project preview card!
}
