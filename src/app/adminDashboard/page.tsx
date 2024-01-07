"use client";

import {
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect } from "react";
import CustomTable from "../../components/CustomTable";

const Dashboard = () => {
  //State for form typescript with Company name, Num of users, num of product,Percentage values
  const [data, setData] = React.useState({
    companyName: "",
    numOfUsers: 0,
    numOfProducts: 0,
    percentage: 0,
  });

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
    <div className="w-full">
      <p className="text-xs font-bold underline mt-10">Admin Dashboard </p>
      <h3 className="text-2xl font-bold text-abgp-700 ">User List</h3>

      <div className="w-full mt-20">
        <CustomTable />
      </div>
    </div>
  );
};

export default Dashboard;
