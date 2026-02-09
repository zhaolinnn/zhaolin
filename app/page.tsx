import Image from "next/image";
import { Projects } from '@/app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hi, i'm alan liu
        <br />
        劉兆林
        <br />
        アラン・リュー
      </h1>
      
      <p className="mb-4">
        {`i'm a full-stack dev currently looking for swe internship roles.`}
      </p>
      <div className="my-8">
      </div>


      <Projects />
    </section>

    
  )
}