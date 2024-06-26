import React, { ReactNode } from "react";
import { Button} from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const SearchBar = (props: {
  icon: ReactNode;
  buttonText: string;
  placeHolder:string;
}) => {

  const { icon, buttonText,placeHolder } = props;

  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "pl-4 pr-0 bg-default-100 rounded-full border-2 border-gray-600",
        input: "ml-4 text-sm outline-none border-none",
        innerWrapper: "flex",
      }}
      endContent={
        <Button radius="full" className="w-auto px-8 py-1 rounded-full text-[var(--primary-900)] font-bold bg-[var(--primary-500)]">
          {buttonText}
        </Button>
      }
      labelPlacement="outside"
      placeholder={placeHolder}
      startContent={icon}
      type="search"
    />
  );
};

export default SearchBar;
