import Image from "next/image";
import { Projects } from '@/app/components/projects'

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.jpg"
        alt="Alan Liu"
        width={576}
        height={144}
        className="aspect-[4/1] w-full rounded-2xl overflow-hidden bg-[#e8ebe8] object-cover"
        style={{
          backgroundPosition: 'center',
          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        }}
      />

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter pt-8">
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