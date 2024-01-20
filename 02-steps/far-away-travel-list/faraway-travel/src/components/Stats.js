import React from "react";

export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>please add smth</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "fully packed"
          : `
            you have ${numItems} items on your list , and you already packed
            ${numPacked}🫠
            ${percentage}%
          `}
      </em>
    </footer>
  );
}
