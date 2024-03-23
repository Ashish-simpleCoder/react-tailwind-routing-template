import { createLazyFileRoute } from '@tanstack/react-router'

// prettier-ignore
export const Route = createLazyFileRoute('/' as never)({
   component: HomePage,
});

function HomePage() {
   return (
      <div>
         <h2>Home Page</h2>
      </div>
   )
}
