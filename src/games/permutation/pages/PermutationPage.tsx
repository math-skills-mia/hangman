function PermutationPage() {
  return (
    <div className="flex flex-col gap-5 items-center bg-[#fffef1] p-4 min-h-screen w-full font-mono transition-all duration-300">
      {/* Header */}
      <div className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-center w-full">
        <h1 className="text-xl md:text-2xl font-bold tracking-widest">
          PERMUTATION
        </h1>
      </div>
      {/* Win/Lose Message */}
      <div className="text-base md:text-xl text-center font-bold h-8 text-slate-800 -mt-1 -mb-3 md:-mb-2 md:mt-0 transition-all duration-300">
        {/* {isWinner && (
          <span className="text-green-600">
            You Win! - Refresh to play again
          </span>
        )}
        {isLoser && (
          <span className="text-red-600">
            You Lose! - Refresh to play again
          </span>
        )} */}
      </div>
      {/* Game Area */}
      <div className="flex flex-col items-center w-full max-w-4xl"></div>
    </div>
  );
}

export default PermutationPage;
