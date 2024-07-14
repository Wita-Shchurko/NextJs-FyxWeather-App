"use client";

import React from "react";
import { FaSearchLocation } from "react-icons/fa";

type Props = {
	handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void,
	setLocation: React.Dispatch<React.SetStateAction<string>>,
};

const Input = ({ handleSearch, setLocation }: Props) => {
	return (
		<form className="flex items-center md:w-1/4 w-full">
			<input
				className="w-full pl-2 pr-7 py-1 bg-transparent border-b-2 placeholder-white outline-none  text-xl"
				type="text" 
				placeholder="Search City..."
				onKeyDown={handleSearch}
				onChange={(e) => setLocation(e.target.value)}
			/>

			<div className="ml-[-25px] cursor-pointer ">
				<FaSearchLocation />
			</div>
		</form> 
	)
}

export default Input