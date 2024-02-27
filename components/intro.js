import Link from 'next/link';

export default function Intro() {
    return (
      	<div className="flex flex-col p-5">
        	<div className="text-5xl sm:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
        		Sachin Chhabria
      		</div>
      		<Link href="mailto:sach.chhabria@gmail.com" className="lg:mx-auto hover:bg-black hover:text-white border-b border-black mb-4 max-w-max">
			 	sach.chhabria@gmail.com
      		</Link>
			<img src="/images/profile.jpg" className="hidden rounded-full w-60 mx-auto lg:block mb-5"/>
    	</div>
  	);
}
