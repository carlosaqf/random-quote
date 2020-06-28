This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Credit to the owner of the API [Jim Merioles](https://github.com/jimmerioles)

## To Run Project
- Clone repo to local machine
- Navigate to project folder and in a command prompt/terminal enter `npm start`
- Go to `http://localhost:3000` on a new browser tab/window if it does not open one automatically.

---
## Miscellaneous Information

#### Technologies

This project was made to practice loading data from an api and then displaying that information.

It was built using

- React (Create-React-App, Hooks)
- Styled Components

#### Biggest Challenges

- Random Quote Button
- Tweet Button

To work on implementing a random button function I made use of the React Hook `useState`. This could have been accomplished any number of ways, but I figured I could use the practice.

```
const [num, setNum] = useState(0)

let randNum = Math.floor(Math.random() * res.response.data.length)

<Button onClick={() => 
	setNum(randNum === num 
		? Math.floor(Math.random() * res.response.data.length)
		: randNum
	)
}>
```
The code above are the lines that both set and assign a new random number upon click of the generate button. 

To implement the tweet functionality I simply pass the quote variable to a function that concatenates it to the proper url string and assign that to an anchor tag `<a>`

```
const tweetLink = (quote) => {
    return `https://twitter.com/intent/tweet?text=${quote}`
}

<Button primary>
    <a href={tweetLink(quote)}>
        Tweet
	</a>
</Button>
```

#### Future Updates

Some potential ideas for future ideas
- Additional page that displays full list of all quotes
- Ability to sort by Author
- Search function for specific Author/Quote
- Use of React/Router for multi-page naviagation

---

#### Questions/Issues

Feel free to reach out to me! 