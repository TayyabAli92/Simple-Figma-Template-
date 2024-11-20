import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-[465px] w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4 ">
      
        <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>

        <p className="font-normal text-[32px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Incidunt odio persiciatis delectus, obcaecati exercitationem dolor illo minus.  
        </p>

          <button className="text-white w-[237px] h-[66px] p-4 bg-black">Contact Us</button>
        </div>
        <div className="flex-1">
          <div>
            <Image
              src="/image/binner-image.png"
              alt="Binner Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
