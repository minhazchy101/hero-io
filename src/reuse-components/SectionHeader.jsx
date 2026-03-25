import React from 'react';

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignment =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`w-full max-w-3xl mx-auto m-5 space-y-5 ${alignment} ${className}`}>
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;