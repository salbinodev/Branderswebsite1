export default function ScholarshipCard({ title, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-wine">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    );
  }