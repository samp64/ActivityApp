# Hoop Activity App


## Deploying

```
git clone https://github.com/samp64/App.git
```

### Backend

Install Serverless

```
npm install -g serverless
```

Navigate to /api

Install dependencies

```
npm install 
```

Start
```
npm start 
```

### Frontend

Install dependencies, in root of the project:
```
npm install
```

Start
```
npm start 
```


Navigate to http://localhost:8009/

## Notes

My plan was to set up a local dynamodb with the serverless offline the project is using.
Annoyingly receiving an unhelpful error, which other people seem to be getting too: https://github.com/99xt/serverless-dynamodb-local/issues/210

I will have another go if this gets resolved.

So for now it's just returning the JSON.
