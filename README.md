# Portfolio Website

https://milan72.github.io/Portfolio_Website-Milan
A modern, interactive personal portfolio website built by me with Next.js, TypeScript, and Tailwind CSS.



## Project Structure Used

```
portfolio-milan/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── data/
│   └── portfolio.ts    # Your portfolio data
├── start.bat           # Simple startup script (Windows)
├── start.ps1           # PowerShell startup script
└── package.json
```

## Customization

### Update Your Information

Edit `data/portfolio.ts` to update:
- **Personal info**: Name, title, bio
- **Skills**: Your technical skills and proficiency levels
- **Projects**: Your portfolio projects
- **Experience**: Work history
- **Education**: Educational background
- **Contact**: Email, phone, social media links

### Example:
```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio here...",
}
```

## Features of the website

- Modern and responsive design
- Smooth animations with Framer Motion
- Mobile-friendly interface
- Fast performance with Next.js
- Interactive sections: Hero, About, Skills, Projects, Experience, Contact

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Build for Production

```bash
npm run build
npm run prod
```

## 🔧 Troubleshooting

### Port 3001 Already in Use

If you get a port conflict error:
1. Use the startup scripts: `npm start` or `npm run start:ps`
2. They automatically clean up port 3001 before starting

### Manual Port Cleanup

```powershell
# Kill process on port 3001
Get-NetTCPConnection -LocalPort 3001 | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

# Or kill all Node processes
taskkill /F /IM node.exe
```
