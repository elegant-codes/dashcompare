"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  //State for form typescript with Company name, Num of users, num of product,Percentage values
  const [data, setData] = React.useState({
    companyName: "",
    numOfUsers: 0,
    numOfProducts: 0,
    percentage: 0,
  });

  const router = useRouter();

  useEffect(() => {
    if (data.numOfProducts > 0 && data.numOfUsers > 0) {
      setData({
        ...data,
        percentage: Math.round((data.numOfProducts / data.numOfUsers) * 100),
      });
    } else {
      setData({
        ...data,
        percentage: 0,
      });
    }
  }, [data.numOfProducts, data.numOfUsers]);

  return (
    <div>
      <p className="text-xs font-bold underline mt-10">Dashboard </p>
      <h3 className="text-2xl font-bold text-abgp-700 ">Company Details</h3>

      <div className="w-[500px] mt-20">
        <form>
          {/* Company name, Num of users, num of product,Percentage */}
          <div className="my-5">
            <Input
              placeholder="MicroTan"
              className="w-full"
              size="lg"
              labelPlacement="outside"
              label="Company Name"
              value={data.companyName}
              onChange={(e) =>
                setData({ ...data, companyName: e.target.value })
              }
            />
          </div>
          <div className="my-10">
            <Input
              placeholder="10000"
              className="w-full"
              size="lg"
              labelPlacement="outside"
              label="Num of users"
              type="number"
              value={data.numOfUsers.toString()}
              onChange={(e) =>
                setData({ ...data, numOfUsers: Number(e.target.value) })
              }
            />
          </div>
          <div className="my-10">
            <Input
              placeholder="300"
              className="w-full"
              size="lg"
              labelPlacement="outside"
              label="Num of products"
              type="number"
              value={data.numOfProducts.toString()}
              onChange={(e) =>
                setData({ ...data, numOfProducts: Number(e.target.value) })
              }
            />
          </div>
          <div className="my-10">
            <Input
              placeholder="0%"
              className="w-full"
              size="lg"
              labelPlacement="outside"
              label="Percentage"
              classNames={{ label: "text-sm text-abgp-700", input: "w-full" }}
              value={data.percentage.toString() + "%"}
              disabled
            />
          </div>

          <Button
            className="w-full h-[48px] bg-abgp-700 text-abb-100 text-sm font-bold leading-normal"
            size="lg"
            onClick={() => router.push("/adminDashboard")}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
