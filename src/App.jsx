import { ThemeProvider } from "@/components/theme-provider"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing";
import OnBoarding from "./pages/onboarding";
import JobPage from "./pages/job";
import JobListing from "./pages/job-listing";
import SavedJobs from "./pages/saved-job";
import MyJobs from "./pages/my-jobs";
import PostJob from "./pages/post-job";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding /> 
      },
      {
        path: "/jobs",
        element:  <JobListing />
      },
      {
        path: "/job/:id",
        element: <JobPage />
      },
      {
        path: "/post-job",
        element: <PostJob />
      },
      {
        path: "/saved-jobs",
        element:  <SavedJobs />
      },
      {
        path: "/my-jobs",
        element: <MyJobs />
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App;
