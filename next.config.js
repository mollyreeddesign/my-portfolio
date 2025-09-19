/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/case-studies/case-1', destination: '/case-studies/hiltonpropertypages', permanent: true },
      { source: '/case-studies/case-2', destination: '/case-studies/uoselfcheckout', permanent: true },
      { source: '/case-studies/case-3', destination: '/case-studies/jamfamilycalendar', permanent: true },
      { source: '/case-studies/case-4', destination: '/case-studies/valeriejurado', permanent: true },
    ];
  },
};

module.exports = nextConfig;
