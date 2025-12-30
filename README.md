# Utkarsh Bhandari - Portfolio & Blog

A modern, sleek developer portfolio and technical blog built with Next.js 16. Showcasing full-stack development skills, DSA expertise, and projects from a DTU ECE student passionate about the MERN stack.

## 🚀 Features

- ✨ **Elegant Dark Mode**: Beautiful theme switching with smooth transit## 💡 Tips & Best Practices

### Writing Great Blog Posts

1. **Use Descriptive Titles:** Make them SEO-friendly and clear
2. **Write Engaging Excerpts:** Hook readers in the preview
3. **Add Relevant Tags:** Helps with categorization and search
4. **Include Code Examples:** Use syntax highlighting for better readability
5. **Set Featured Posts:** Highlight your best content
6. **Add Images:** Visual content increases engagement

### Performance Optimization

- Images are automatically optimized by Next.js
- Blog posts are statically generated for fast loading
- Dark mode uses CSS variables for instant switching
- Lazy loading implemented for better performance

### SEO Optimization

- Update meta tags in `app/layout.tsx`
- Add Open Graph images for social sharing
- Use semantic HTML throughout
- Blog posts include structured data

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error:** `MongooseServerSelectionError`

**Solution:**
```bash
# Check if MongoDB is running (local)
sudo systemctl status mongodb

# Verify connection string format
# mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>

# Whitelist your IP in MongoDB Atlas
```

### Admin Access Problems

**Error:** Can't access admin panel

**Solution:**
1. Clear browser cookies/localStorage
2. Verify environment variables are set correctly
3. Check rate limiting (wait 15 minutes if locked out)
4. Restart development server

### Build Errors

**Error:** TypeScript errors during build

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Rebuild
pnpm build
```

## 🔒 Security Features

- **Environment Variables:** Sensitive data never exposed to client
- **Rate Limiting:** Prevents brute force attacks on admin panel
- **Input Validation:** All user inputs are sanitized
- **Secure Sessions:** Admin authentication with proper session handling
- **CORS Protection:** API routes are properly configured
- **NoSQL Injection Prevention:** Mongoose sanitizes queries

## 📈 Future Enhancements

Planned features for future releases:

- [ ] Blog post comments system
- [ ] Social media share buttons
- [ ] Newsletter subscription
- [ ] Search functionality for blog posts
- [ ] Categories and tag filtering
- [ ] Reading progress indicator
- [ ] Related posts recommendations
- [ ] RSS feed for blog
- [ ] Sitemap generation
- [ ] Advanced analytics dashboard

## 📞 Contact

- **Email:** bhandariutkarsh01@gmail.com
- **Phone:** +91 7011451388
- **Location:** Delhi, India
- **GitHub:** [utkarshX-dev](https://github.com/utkarshX-dev)
- **LinkedIn:** Connect with me!

## 📄 License

MIT License

Copyright (c) 2025 Utkarsh Bhandari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

If you found this project helpful or learned something from it, please give it a ⭐️!

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the database solution
- Vercel for hosting and deployment
- The open-source community for inspiration

---

**Built with ❤️ by Utkarsh Bhandari**

*Full Stack Developer | DTU ECE Student | MERN Enthusiast | DSA Problem Solver*

---

**Last Updated:** December 2025rsistent preferences
- 📝 **Technical Blog**: Write and share in-depth articles on DSA, algorithms, and web development
- 🔒 **Secure Admin Panel**: Custom 3-question authentication challenge with rate limiting
- 🎨 **Modern UI/UX**: Clean, professional design with thoughtful animations
- 📱 **Fully Responsive**: Optimized experience across all devices and screen sizes
- 🚀 **Fast Performance**: Optimized with Next.js 16 for lightning-fast page loads
- 📊 **View Tracking**: Built-in analytics for blog post views

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB with Mongoose ODM
- **Icons**: Lucide React
- **Theme**: next-themes
- **Markdown**: Custom Markdown renderer for blog posts

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account or local MongoDB instance
- pnpm (recommended) or npm

### Setup Steps

1. **Clone the repository:**
```bash
git clone https://github.com/utkarshX-dev/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Admin Security Questions (Set your own answers)
ADMIN_Q1_ANSWER=typescript
ADMIN_Q2_ANSWER=2025
ADMIN_Q3_ANSWER=utkarsh

# Optional
NODE_ENV=development
```

4. **Run the development server:**
```bash
pnpm dev
# or
npm run dev
```

5. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to view your portfolio.

### First Time Setup

After starting the server, you can seed the blog with sample posts:

```bash
# Method 1: Using the API endpoint
curl -X POST http://localhost:3000/api/seed-blog

# Method 2: Visit in browser
# Navigate to http://localhost:3000/api/seed-blog
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables:**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add your MongoDB URI and admin answers
   - Redeploy if needed

4. **Done!** Your site is live 🎉

### Other Platforms

This Next.js app can be deployed on:

- **Netlify**: Full Next.js support with automatic deployments
- **Railway**: Easy MongoDB hosting + app deployment
- **Render**: Free tier available for full-stack apps
- **AWS Amplify**: Enterprise-grade hosting
- **DigitalOcean App Platform**: Simple deployment with database

### Environment Variables for Production

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
ADMIN_Q1_ANSWER=your_secure_answer_1
ADMIN_Q2_ANSWER=your_secure_answer_2
ADMIN_Q3_ANSWER=your_secure_answer_3
NODE_ENV=production
```

## 🔧 Configuration

### Admin Access

1. **Access the Challenge:**
   - Navigate to `/admin/challenge`
   - Or click "Admin" in the navigation menu

2. **Security Questions:**
   - Question 1: "What's your favorite programming language?"
   - Question 2: "What year is it?"
   - Question 3: "What's your first name?"

3. **Set Your Answers:**
   - Update answers in `.env.local`:
   ```env
   ADMIN_Q1_ANSWER=typescript
   ADMIN_Q2_ANSWER=2025
   ADMIN_Q3_ANSWER=utkarsh
   ```

4. **Access Dashboard:**
   - After correct answers, you'll be redirected to `/admin`
   - Session is stored securely
   - Manage all blog posts from the dashboard

### MongoDB Setup

#### Option 1: MongoDB Atlas (Cloud - Recommended)

1. **Create Account:**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create Cluster:**
   - Create a new cluster (free tier available)
   - Choose a region close to your users
   - Wait for cluster creation (2-5 minutes)

3. **Get Connection String:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

4. **Add to Environment:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

#### Option 2: Local MongoDB

1. **Install MongoDB:**
   ```bash
   # Ubuntu/Debian
   sudo apt install mongodb
   
   # macOS
   brew install mongodb-community
   ```

2. **Start MongoDB:**
   ```bash
   sudo systemctl start mongodb
   ```

3. **Use Local Connection:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   ```

### Rate Limiting

The admin panel includes built-in rate limiting:
- Maximum 5 attempts per 15 minutes
- Prevents brute force attacks
- Automatically resets after cooldown period

## 📝 Usage

### Managing Blog Posts

#### Creating Posts
1. Navigate to `/admin/challenge`
2. Answer the three security questions
3. Click "New Post" in the admin dashboard
4. Write your post using Markdown syntax
5. Add tags, set featured status, and upload images
6. Click "Publish"

#### Editing Posts
- Click the edit (pencil) icon on any post in the admin dashboard
- Make your changes
- Save to update

#### Deleting Posts
- Click the delete (trash) icon on any post
- Confirm deletion

### Writing Blog Posts

The blog supports full Markdown syntax:

```markdown
# Heading 1
## Heading 2

**Bold text** and *italic text*

- Bullet points
- Lists

1. Numbered lists
2. Are supported

\`\`\`javascript
// Code blocks with syntax highlighting
function hello() {
  console.log("Hello, World!");
}
\`\`\`

[Links](https://example.com)
![Images](url-to-image)
```

### Theme Toggle

Click the sun/moon icon in the navigation bar to switch between light and dark modes. Your preference is automatically saved.

## 🎨 Customization

### Personal Information
- Update your bio and details in `app/page.tsx`
- Add your profile picture to `public/me.png`
- Update social media links in the contact section

### Theme Colors
- Modify color scheme in `app/globals.css`
- Customize dark/light mode colors using CSS variables
- Update Tailwind configuration in `tailwind.config.ts`

### Admin Security
- Change admin questions in `app/admin/challenge/page.tsx`
- Update answers in your `.env.local` file
- Customize rate limiting and security settings

### Projects & Resume
- Add your projects in the projects section
- Upload your resume PDF
- Update skills and technologies

### Blog Customization
- Modify blog layout in `app/blog/page.tsx`
- Customize post template in `app/blog/[slug]/page.tsx`
- Style Markdown rendering in `components/MarkdownRenderer.tsx`

## 🏗️ Project Structure

```
portfolio/
├── app/                      # Next.js 16 App Router
│   ├── admin/               # Admin panel & authentication
│   ├── api/                 # API routes (posts, admin)
│   ├── blog/                # Blog pages & post details
│   ├── globals.css          # Global styles & theme
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── MarkdownRenderer.tsx # Blog post renderer
│   └── ThemeToggle.tsx      # Dark mode toggle
├── lib/                     # Utilities & helpers
│   ├── mongodb.ts           # Database connection
│   └── posts.ts             # Blog post functions
├── models/                  # MongoDB schemas
│   └── Post.ts              # Blog post model
├── public/                  # Static assets
│   └── MYIMG/               # Project images
└── scripts/                 # Utility scripts
    └── seedBlogPost.js      # Database seeding
```

## 🚀 Featured Projects

This portfolio showcases several major projects:

- **DTUnite**: College campus community platform (MERN Stack)
- **EyeScope AI**: AI-powered retina disease detection
- **Stay Vista**: Hotel booking application
- **Autocomplete Engine**: C++ based search engine
- **Playlist Duration Calculator**: YouTube API integration

## 📚 Blog Topics

The blog covers:
- Data Structures & Algorithms
- Web Development (MERN Stack)
- System Design
- Problem Solving Techniques
- Tech Tutorials & Guides

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ by Utkarsh Bhandari
