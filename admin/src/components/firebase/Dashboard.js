import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
<nav class=" rounded-md w-72 h-screen flex-col justify-between">
	<div class=" bg-white h-full">
		<div class="flex  justify-center py-10 shadow-sm pr-4">
			
			<div class="pl-2">

				<h1 class="text-2xl font-bold text-indigo-600">GIRALDA</h1>
					<span class="text-xs block text-gray-800">DASHBOARD</span>
			</div>
		</div>
		<div class="pl-10">
			<ul class="space-y-8 pt-10">
				<li class="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
					</svg>
					<a href="">Dashboard</a>
				</li>
				<li class="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
					<a href="">Lister les maison </a>
				</li>
				<li class="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
					</svg>
					<Link to="/maisonlist">Ajouter une maison</Link>
				</li>
			
				<li class="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
					</svg>
					<a href="">Lister les Contacts</a>
				</li>
				
			</ul>
		</div>
	</div>
	<div class="bg-white flex items-center space-x-4 pl-10 pb-10 hover:text-indigo-600 cursor-pointer">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
		</svg>
		<a href="/loguot">Logout</a>
	</div>
</nav>
    </>
  )
}

export default Dashboard