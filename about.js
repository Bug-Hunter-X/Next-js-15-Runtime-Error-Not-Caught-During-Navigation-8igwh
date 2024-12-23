```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the About page is not properly set up in the pages directory.
  const nonExistentVar = someUndefinedVariable;

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Value of nonExistentVar: {nonExistentVar}</p> 
    </div>
  );
}
```