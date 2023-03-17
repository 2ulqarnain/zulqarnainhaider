import Button from "@/components/buttons/button-primary";

type Props = {
    title:String
}

function Header({title}:Props = {title:"User"}) {

    const buttons = ["Mark Today", "Request Leave", "View Attendance", "Logout"];
    
    return (
        <div className="grid grid-cols-[1fr,auto,1fr] justify-items-center">
            <h1 className=" col-start-2 font-dosis text-3xl uppercase">{title}</h1>
            <div className="flex ml-auto gap-x-5">{buttons.map(text=><Button text={text} />)}</div>
        </div>
    );
}

export default Header;
