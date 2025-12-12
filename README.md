📰 rNews — React News App (RobustNews):

A clean, fast, and modern React News Application built with NewsAPI.org, featuring category filtering, infinite scrolling, top-loading progress bar, and responsive UI.

This app fetches real-time headlines and displays them with an elegant card-based layout.

🚀 Features:

🔥 Core Features

* Live News Fetching using NewsAPI
* Infinite Scroll for seamless news browsing
* Category-based Navigation (Business, Sports, Tech, Health, etc.)
* Top Loading Bar for smooth page transitions
* Responsive Layout using Bootstrap cards
* Environment-based API key using `.env`
* Automatic Title Update per category

🧩 Tech Stack

* React (Hooks + Functional Components)
* React Router v6
* InfiniteScroll (react-infinite-scroll-component)
* React Top Loading Bar
* Bootstrap
* NewsAPI.org

📦 Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/NewsApp.git
cd NewsApp
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Add your API key

Create a `.env` file at the root:

```
REACT_APP_NEWS_API=your_api_key_here
```

Restart the app after saving.

4️⃣ Run the project

```bash
npm start
```

App will run at: [http://localhost:3000](http://localhost:3000)

---

🔑 API Usage

This project uses the [NewsAPI.org](https://newsapi.org) endpoint:

```
https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR_KEY
```

Environment variable used:

```js
const apikey = process.env.REACT_APP_NEWS_API;
```



🗂️ Project Structure

```
src/
│── App.js
│── App.css
│── components/
│       ├── Navbar.js
│       ├── News.js
│       ├── NewsItem.js
│       ├── Spinner.js
│── index.js
```



 🧠 How Infinite Scroll Works

* `page` state increments with every scroll
* `fetchArticles()` is triggered when new data is needed
* Prevents unnecessary fetches when all results are loaded
* Uses:

```js
<InfiniteScroll
  dataLength={articles.length}
  next={fetchData}
  hasMore={articles.length < totalResults}
  loader={<Spinner />}
/>
```

---

 🧱 Key Components

 News Component

Handles:

* Fetching data
* Setting progress bar
* Infinite scrolling
* Rendering `NewsItem` components

 NewsItem Component

Displays:

* Title
* Description
* Source badge
* Image
* External link

 Navbar Component

Provides navigation:

* General
* Business
* Technology
* Sports
* Health
* Entertainment
* Science

---

 🚧 Known Limitations

* NewsAPI free plan does not allow requests from production domains (only localhost).
* Some articles may have missing images — handled gracefully.

---

 🤝 Contributing

Pull requests are welcome!
Feel free to open issues for suggestions or bug reports.

---

 📝 License

This project is licensed under the MIT License.

---

If you want, I can also generate:

✅ a project logo
✅ GitHub badges (stars, forks, tech stack)
✅ a better mobile-friendly screenshot section
✅ a deployment-ready Vercel/Netlify guide

Just ask!
