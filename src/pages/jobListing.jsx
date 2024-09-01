import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
 import JobCard from "@/components/job-card";



const JobListing = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");

  const { isLoaded } = useUser();

    const {fn:fnJobs,
          data:jobs,
          loading:loadingJobs,
      } = useFetch(getJobs, {
        location,
        company_id,
        searchQuery,
      });
 
      
      useEffect(() => {
        if (isLoaded) fnJobs();
      }, [isLoaded, location, company_id, searchQuery]);
      

      if (!isLoaded) {
        return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
      }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Jobs</h1>

      <form className="h-14 flex flex-row w-full gap-2 items-center mb-3">

        <Input
          type="text"
          placeholder="Search Jobs by Title.."
          name="search-query"
          className="h-full flex-1  px-4 text-md"
        />
          <Button type="submit" className="h-full sm:w-28"  variant="blue" >Search</Button>
      </form>
    
       {loadingJobs && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7"/>
       )}
    

     {loadingJobs === false && (
       <div>
        {jobs?.length ? (
          jobs.map((job) => {
            return <JobCard key={job.id} job={job} />
          })
        
     ) : (
      <div>No Jobs Found</div>
    )}
       </div>
     )}
      

    </div>
  );
};

export default JobListing
