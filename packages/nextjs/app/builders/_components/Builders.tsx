"use client";

import { Address } from "~~/components/scaffold-eth/Address";
import { useScaffoldEventHistory } from "~~/hooks//scaffold-eth/useScaffoldEventHistory";

export const Builders = () => {
  const { data: events } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 125009576n,
    watch: true,
  });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="bg-base-100 p-4 rounded-lg shadow-center overflow-x-auto">
          {events?.map((event, index) => (
            <div key={index} className="bg-gray-200/60 rounded-lg p-4">
              <a
                href={`${window.location.pathname}/${event.args[1]}`}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <Address address={event.args[1]} format="long" disableAddressLink={true} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
