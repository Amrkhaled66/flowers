import axiosInstance from "./axios";
import { axiosPrivate } from "./axios";


const getBusyTimes = async () => {
    const { data } = await axiosInstance.get("/api/busy-delivery-times");
    return data.data;
};

const getOrders = async (data: any) => {
    const { data: res } = await axiosPrivate.post("/api/orders", data);
    return res;
};

const submitOrder=async (data:any)=>{
    const {data:res}=await axiosPrivate.post("/api/orders",data);
    return res;
}
export {getBusyTimes,submitOrder,getOrders}