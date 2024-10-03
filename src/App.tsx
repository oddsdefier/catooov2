import React from "react";
const App: React.FC = () => {
	return (
		<div className="font-inter container mx-auto lg:px-24 min-h-screen flex flex-grow bg-black">
			<div className="flex flex-col justify-between flex-1">
				<section className="flex flex-col flex-grow py-2">
					<header className="flex justify-between py-4 px-6 items-center">
						<nav className="text-gray-300 text-md">
							<ul className="flex items-center gap-6">
								<li className="hover:text-gray-400"></li>
							</ul>
						</nav>
						<div>p</div>
					</header>

					<main className="pb-10 flex-1 flex flex-col justify-start items-start text-sm">
						<div className="w-full max-w-7xl">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-0 md:gap-4 px-6"></div>
						</div>
					</main>
				</section>
			</div>
		</div>
	);
};
export default App;
