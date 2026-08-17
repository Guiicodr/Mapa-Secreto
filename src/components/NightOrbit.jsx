import React from 'react';

export default function NightOrbit() {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none overflow-hidden z-0">
            {/* Anel de Órbita Giratório */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]">
                <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_#a855f7]" />
                <div className="absolute bottom-12 right-12 w-3 h-3 bg-indigo-300 rounded-full shadow-[0_0_10px_#818cf8]" />
            </div>

            {/* Segundo Anel Cruzado */}
            <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[450px] h-[450px] border border-dashed border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute top-5 right-20 w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_8px_#fde047]" />
            </div>

            {/* Brilho Neón Central */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-900/30 blur-3xl rounded-full" />
        </div>
    );
}