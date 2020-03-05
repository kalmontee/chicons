# Fair-Space
Fair Space is an online apartment listing website, offering renters access to information on available units for rent posted directly by landlords themselves.  It's powered by Google Maps, and Rent Estimate APIs to give the consumer the information needed to list and look for fair rental prices.  

Fair Space gives easy access to its listings and makes it simple for landlords to post their apartmemts for rent.  The website is mobile responsive and offers a simple navigation bar for users to easily manuver from page to page.

Please Click on this [link](https://sleepy-brook-31584.herokuapp.com/) to Check the App out.

## Technologies Used

| Frontend  | Backend |
| ------------- | ------------- |
| React| Nodejs |
| SASS | Express |
| Google Fonts| MongoDB (Mongoose)|
| Gsap | Axios |
| Firebase | Node-SASS


## Usage

- Click to either sign in or sign up. After signing in you have the choice to punch in an address into our home search input to look for apartments in a desired area.  This aciton will return five comparables so you can get an idea of how much apartments are renting in that area.  You can click on the view apt. button to look up the actual location through google maps.

- At that point you can either list an apartment for rent or you can serve our database for listed apartments.  User can add apts to favorites and then delete them if neeed.  The listings cosist of the price, number of bedrooms, a description, and the contact info for the landlord.

## Prerequisites

If you never installed or used React before. Begin with a simple npm install -g creat-react-app

```
npm install -g create-react-app
```

Then begin with a simple install creat-react-app.
```
npm creat-react-app .
```

Must install its depencies for this project.
```
npm install axios
npm install firebase
npm install react-router-dom
npm install google-maps-react
npm install dotenv
npm install express
npm install gsap
npm install mongoose
npm install node-sass
npm install nodemon
npm start
```

If making a pull request then simply start with a ``` npm install ``` to install all the packages provided.

** Must provide an npm install for dotenv and provide your own private API keys to run this App. **

## Requirements

### Must meet all CRUD methods 
Fair Space covers Create Method by allowing the user to post apartments to our database through a form.  The user is also able to add listings to favorites page(this covers the Update method).  You can also search our database for listing, which accomplishes the GET method.  The user can also remove apartments that they've favored by deleting the apartment and this covers the Delete method.

### Polished UI 
We used CSS, SASS, Bootstrap and GSAP to accomplished a very polished UI

### Deployment
App is fully deployed to Heroku.

Link to App is being listed at the beginning of the README.

### Two New Technologies

 Firebase, Gsap(GreenSock), SASS
 
 ## Authors:
 
 **Kelvin Almonte** - [kalmontee](https://github.com/kalmontee)

 **Felix Fernandez** - [jetsgreen](https://github.com/jetsgreen)

 ## Acknowledgments

 Special thanks to our lovely TAs for helping us through this project and the entire course.

 **Francisco Cruz** - [fcruz219](https://github.com/fcruz219)

 **Leigh** - [GitHub](https://github.com/)

 ## License

 This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.