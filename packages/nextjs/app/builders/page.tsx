"use client";

import { Builders } from "./_components/Builders";
import type { NextPage } from "next";

const BuildersOverview: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <Builders />
      </div>
    </>
  );
};

export default BuildersOverview;
