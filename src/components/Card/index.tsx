//import { Button } from "@solana/wallet-adapter-react-ui/lib/types/Button";

export default function Card(props: { imgUrl: string, name: string, description: string }) {
    return (
        <div className="flex flex-col ml-2 mr-2">
            <div className="relative">
                <img className="w-[216px] h-[216px] rounded-t-[8px]" src={props.imgUrl} alt="" />
                <input type={"checkbox"} className="absolute w-[14px] h-[14px] border-[1px] rounded-[3px] top-[11px] right-[11px]"></input>
            </div>
            <div className="flex flex-col bg-white-100 mb-2">
                <p className=" text-black-100 text-[14px] bg-white-100 font-bold pt-2 pr-2 pb-[10px]">{props.name}</p>
                <p className=" text-black-100 ml-2 mr-2 bg-[#F0F2F5] font-normal text-center pt-[10px] pb-[10px] text-[12px] rounded-[8px]">{props.description}</p>
                <button className="text-white-100 text-[12px] group bg-[#0074CC] ml-2 mr-2 text-center pt-[5px] pb-[7px] rounded-[8px] mt-[10px] mb-[8px]">Stake</button>
            </div>
        </div>
    )
}