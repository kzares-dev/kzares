export default function NotFound() {
	return (
		<div className="text-gray-300 mt-2 mb-2 font-mono text-sm space-y-3">
			<h1 className="text-red-400">Command not found</h1>
			<h1>Try: <span className="text-white font-mono bg-slate-500 border rounded-md px-3 py-1">help</span></h1>
		</div>
	);
}
