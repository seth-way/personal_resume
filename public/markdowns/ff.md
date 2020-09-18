
I recently agreed to play in a 2020 fantasy football league with my nephews *(Go Eagles!)* . When I was preparing for the upcoming draft, I realized there was an opportunity to work with new libraries and build something fun and useful.

I challenged myself by timeboxing this build to only a few hours. This forced me to consider what was essential for an MVP and what could be overlooked.

I used the 'create-react-app' dependency for the first time. I'd heard its a fast and easy solution for building a react framework. This worked well and saved some time early.

<div className="md-center-img">
<img src="/images/portfolio/gifs/ff.gif " alt="ff_gif" className="md-img">
<div>

Data for fantasy football rankings is publicly available from hundreds of APIs. I chose to store and parse this data locally, because this suited my use case. If I were to continue developing this project, I would allow it to fetch this data on start up so that it continues to be relevant.