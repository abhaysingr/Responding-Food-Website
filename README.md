# 🍕 Foodie - Food Delivery Website

> A modern, responsive food delivery website built with vanilla JavaScript, HTML5, and CSS3. Order your favorite food with just a few clicks!

---

## 📸 Website Preview

### Hero Section
![Hero Section](Website%20Image/Hero.png)
*Welcome to Foodie! Clean hero section with a call-to-action button*

### Menu
![Menu Section](Website%20Image/Menu.png)
*Browse delicious food items with prices and add them to your cart*

### Services
![Services Section](Website%20Image/Service.png)
*Discover what makes our delivery service special*

### Newsletter Subscription
![Newsletter](Website%20Image/Subcribe.png)
*Subscribe to get updates about new dishes and special offers*

---

## 🎯 About This Project

**Foodie** is a beginner-friendly food delivery website project. I built this to learn and practice:
- ✅ Building responsive websites that work on mobile, tablet, and desktop
- ✅ Using JavaScript modules to organize code properly
- ✅ Creating a shopping cart system
- ✅ Fetching data from JSON files
- ✅ Working with modern CSS and Font Awesome icons

This project is **perfect for beginners** because:
- Simple file structure easy to understand
- Well-organized JavaScript with comments
- Clean CSS with a consistent color scheme
- Real-world functionality (cart, products, newsletter)

---

## 🏗️ Project Structure

```
food-delivery-website/
├── index.html           # Main HTML file - the structure of our website
├── style.css            # All styling and design
├── script.js            # Main JavaScript file that brings everything together
├── products.js          # Code to display food items on the menu
├── cart.js              # Shopping cart logic (add/remove items)
├── ui.js                # User interface interactions
├── products.json        # All food items with names, prices, and images
├── images/              # Food item images (burger, pizza, etc.)
├── Website Image/       # Screenshots for this README
└── README.md            # This file!
```

---

## 💻 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure of the website |
| **CSS3** | Styling and responsive design |
| **JavaScript (ES6+)** | Website functionality and interactions |
| **Font Awesome** | Beautiful icons for cart, menu, social icons |
| **Swiper.js** | Smooth carousel/slider effects |
| **JSON** | Store product data (name, price, image) |

---

## 🚀 How to Get Started

### Step 1: Clone the Repository
Open your terminal/command prompt and run:
```bash
git clone https://github.com/YOUR_USERNAME/food-delivery-website.git
cd food-delivery-website
```

### Step 2: Open the Website
You have **two options**:

**Option A: Using Live Server (Recommended)**
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Website opens in your browser at `http://127.0.0.1:5500`

**Option B: Double-click HTML File**
1. Simply double-click `index.html`
2. Website opens in your default browser

### Step 3: Start Using the Website
- 🏠 Click "Home" to scroll to the top
- 🍔 Click "Menu" to see all food items
- 👜 Click the cart icon to see items you've added
- ✉️ Scroll down to subscribe to the newsletter
- 📱 Try it on your phone - it's fully responsive!

---

## 📋 How It Works (For Developers)

### 1. User Opens Website
```
User opens index.html in browser
           ↓
Browser loads HTML, CSS, and JavaScript
           ↓
script.js runs (the main file)
```

### 2. Main Script Gets Everything Ready
The `script.js` file does 4 things when page loads:
```javascript
document.addEventListener("DOMContentLoaded", () => {
  productDataFetch();      // Load all food items
  initUI();                // Set up the user interface
  initCheckout();          // Get cart ready
  initNewsletter();        // Set up newsletter form
});
```

### 3. Products Get Loaded
**File: `products.js`**
- Fetches food items from `products.json`
- Shows them as cards (with image, name, price, "Add to Cart" button)
- Listens for when user clicks "Add to Cart"

**File: `products.json`**
```json
{
  "id": 1,
  "name": "Double chicken Burger",
  "price": "₹802",
  "image": "images/burger.png"
}
```

### 4. Shopping Cart Works
**File: `cart.js`**
- Stores items user adds
- Calculates total price
- Shows cart count in the bag icon (top right)
- On "Checkout", clears cart and shows thank you message

**Example: When user clicks "Add to Cart"**
```
User clicks "Add to Cart" button
           ↓
addToCart() function runs
           ↓
Item added to cartProduct array
           ↓
Cart total updates automatically
           ↓
Cart icon shows updated count
```

### 5. UI Interactions
**File: `ui.js`**
- Opens/closes the mobile menu on small screens
- Shows/hides the cart sidebar
- Handles smooth scrolling for navigation links

---

## 📱 Features Explained

### 🛒 Shopping Cart
- Click the bag icon (top right) to open cart
- See all items you've added with quantities
- View total price
- Click "Checkout" to complete purchase
- Items won't be added twice - system prevents duplicates

### 📋 Product Menu
- 8 different food items available
- Each item shows: name, price, and image
- Click "Add to Cart" to order
- Products load from `products.json` file

### 📧 Newsletter Subscription
- Enter your email at the bottom
- Click "Subscribe"
- You'll get a thank you message
- Email is NOT stored (it's just for practice)

### 📱 Mobile Responsive
- Website works perfect on phones, tablets, and computers
- Menu becomes a hamburger icon on mobile
- All buttons are easy to tap on small screens

---

## 🎨 Color Scheme

I used a warm, food-friendly color palette:

```css
--lead: #212121           /* Dark gray for text */
--gold-finger: #f2BD12    /* Gold/yellow accent */
--eye-ball: #fffdf7       /* Cream/off-white background */
--hint-yellow: #fcf1cc    /* Light yellow highlight */
--pure-white: #fff        /* White */
```

This combination looks modern and makes you want to order food! 🍴

---

## 🔧 Customization Guide

### Change Restaurant Name
In `index.html`, find this line:
```html
<a href="#" class="logo">Foodie.</a>
```
Change `Foodie` to your restaurant name.

### Add New Food Item
1. Open `products.json`
2. Add a new object:
```json
{
  "id": 9,
  "name": "Your Food Name",
  "price": "₹999",
  "image": "images/your-food-image.png"
}
```
3. Save the file
4. Refresh your browser - new item appears automatically!

### Change Colors
Open `style.css` and find the `:root` section:
```css
:root {
    --lead: #212121;         /* Change text color */
    --gold-finger: #f2BD12;  /* Change accent color */
    --eye-ball: #fffdf7;     /* Change background */
}
```
Replace the color codes with your favorites from [colorpicker.com](https://www.colorpicker.com)

### Change Food Prices
Open `products.json` and update the price:
```json
"price": "₹500"  ← Change this number
```

---

## 📚 Understanding the JavaScript

### ES6 Modules (Import/Export)
This project uses modern JavaScript modules to keep code organized:

**In `products.js`:**
```javascript
export { productDataFetch, productList };  // Share this function
```

**In `script.js`:**
```javascript
import { productDataFetch } from "./products.js";  // Use it here
```

**Think of it like this:**
- Each file does ONE job (single responsibility principle)
- Files export things they want to share
- Other files import what they need
- Keeps code clean and organized

### How `addToCart` Works
```javascript
// User clicks "Add to Cart"
const addToCart = (product) => {
  // Check if item already in cart
  if (item already exists) {
    alert("Item already in cart!");
    return;
  }
  
  // Add to cart array
  cartProduct.push(product);
  
  // Update the display
  updateUI();
};
```

---

## 🧪 Testing Your Changes

After making changes, here's how to test:

1. **Test on Desktop**
   - Open website in Chrome, Firefox, Safari
   - Try clicking all buttons
   - Try adding items to cart

2. **Test on Mobile**
   - Right-click on any element
   - Select "Inspect" → "Toggle device toolbar" (Ctrl+Shift+M)
   - Test on different screen sizes (iPhone, iPad, Android)
   - Try the hamburger menu

3. **Test the Console**
   - Right-click on website
   - Select "Inspect"
   - Go to "Console" tab
   - You'll see any errors (if something breaks)

---

## 🐛 Common Issues & Solutions

### Website Looks Broken
**Problem:** Styles not loading or images not showing

**Solution:**
- Make sure all files are in the same folder
- Refresh the page (Ctrl+F5)
- Check that `images/` folder has food pictures
- Check console for errors (F12 → Console)

### "Add to Cart" Not Working
**Problem:** Clicking button does nothing

**Solution:**
- Open console (F12)
- Look for red error messages
- Make sure `products.json` exists
- Check file paths are correct

### Cart Shows Wrong Total
**Problem:** Total price calculation is off

**Solution:**
- Open console and check for JavaScript errors
- Make sure prices in `products.json` are numbers not text
- Refresh the page and try again

### Mobile Menu Not Opening
**Problem:** Hamburger button doesn't work on phone

**Solution:**
- Check `ui.js` for mobile menu code
- Make sure CSS has media queries
- Test in browser's device mode (F12)

---

## 🚀 Next Steps - What to Learn

After understanding this project, here's what you can add:

✅ **Phase 1: Easy**
- Add more food items to `products.json`
- Change colors and fonts
- Add your restaurant logo

✅ **Phase 2: Medium**
- Connect to a real backend server (Node.js)
- Save cart to browser storage (`localStorage`)
- Add user login/registration

✅ **Phase 3: Advanced**
- Add payment gateway (Stripe, PayPal)
- Create an admin panel to manage items
- Add real-time order tracking
- Deploy to the internet (Netlify, Vercel, GitHub Pages)

---

## 📖 Learn More

### JavaScript Resources
- [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ES6 Modules Explained](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Fetch API for Loading Data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### CSS Resources
- [CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

### Tools Used
- [Font Awesome Icons](https://fontawesome.com)
- [Swiper Carousel](https://swiperjs.com)
- [Google Fonts](https://fonts.google.com)

---

## 💡 Pro Tips for Beginners

1. **Read the Code Comments** - The code has helpful comments explaining what each part does
2. **Use Browser DevTools** - F12 opens developer tools, very useful for debugging
3. **Test One Change at a Time** - Make one change, refresh, see if it works
4. **Don't Be Afraid to Break Things** - That's how you learn! You can always undo changes
5. **Use Console.log()** - Add `console.log(variable)` to see what's happening
6. **Read Error Messages** - Browser will tell you what's wrong, take time to read them

---

## 📄 License

This project is open source. You can use it for learning, personal projects, or as a starting point for your own ideas!

---

## 🤝 Contributing

Found a bug or want to improve this project? Here's how:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -m 'Added new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Open a Pull Request

---

## ❓ FAQ

**Q: Can I use this for a real restaurant?**
A: Yes! But you'll need to add a payment system and connect it to a real backend.

**Q: Why is it in Indian Rupees (₹)?**
A: Because the project was built with Indian market in mind. Change to your currency in `products.json`!

**Q: How do I deploy this online?**
A: Use Netlify (easiest), Vercel, GitHub Pages, or any web hosting. It's just HTML, CSS, and JavaScript!

**Q: Do I need to learn Node.js to use this?**
A: No! This project works perfectly without any backend. But if you want to save data, you'll need to learn Node.js later.

**Q: Can I sell this code?**
A: The code is for learning. You can use it for personal/commercial projects, but don't just resell the code.

---

## 📞 Support

Having trouble? Here's what to do:

1. **Check the console** - F12 → Console tab for errors
2. **Read error messages carefully** - They usually tell you exactly what's wrong
3. **Google the error** - Chances are someone had the same problem
4. **Ask on Stack Overflow** - Great community for programming help
5. **Check the project issues** - Other people might have solved your problem

---

## 👨‍💻 Learning Outcomes

By studying this project, you'll understand:

- ✅ How to structure a website with HTML
- ✅ How to style it with CSS (Flexbox, Responsive Design)
- ✅ How to add interactivity with JavaScript
- ✅ How to organize code into modules
- ✅ How to work with JSON data
- ✅ How to handle events (click, submit)
- ✅ How to manipulate the DOM
- ✅ How to create a shopping cart feature
- ✅ How to make responsive websites for mobile

---

## 🎉 Final Words

This project is proof that you can build something **REAL** with just HTML, CSS, and JavaScript! No fancy frameworks needed to start.

Remember: **Every expert was once a beginner.** Keep learning, keep building, keep growing! 🚀

---

**Made with ❤️ by a Fresher Developer**

*Last Updated: 2024*
