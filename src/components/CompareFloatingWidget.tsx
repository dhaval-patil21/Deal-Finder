
import React from 'react';
import { GitCompare, X, ArrowRight } from 'lucide-react';
import { useCompare } from '../context/CompareContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CompareFloatingWidget = () => {
  const { compareList, removeFromCompare, clearCompareList, compareCount, canCompare } = useCompare();
  const router = useRouter();

  const handleNavigateToCompare = () => {
    router.push('/compare');
  };

  if (compareCount === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <GitCompare className="w-5 h-5 text-orange-500" />
          <span className="font-semibold text-slate-700">Compare ({compareCount}/3)</span>
        </div>
        <button
          onClick={clearCompareList}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2 mb-3 max-h-32 overflow-y-auto">
        {compareList.map((product) => (
          <div key={product.id} className="flex items-center space-x-2 bg-gray-50 rounded p-2">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="w-8 h-8 object-cover rounded"
            />
            <span className="text-sm text-slate-600 truncate flex-1">
              {product.title}
            </span>
            <button
              onClick={() => removeFromCompare(product.id)}
              className="text-red-400 hover:text-red-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <button
          onClick={handleNavigateToCompare}
          disabled={!canCompare()}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center space-x-1 ${
            canCompare()
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Compare Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {!canCompare() && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          Add at least 2 products to compare
        </p>
      )}
    </div>
  );
};

export default CompareFloatingWidget;