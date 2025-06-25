export default function PrivacyPage() {
  return (
    <>
      <div className="p-4 flex flex-col bg-[#1a1a1a] min-h-screen">
        <h1 className="text-white text-4xl mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <p className="text-gray-300 text-lg">
            Welcome to our platform. Your privacy is important to us, and we are committed to being transparent about how we handle your information. This Privacy Policy outlines our practices regarding the collection, use, and storage of data—specifically clarifying that we do <strong>not</strong> collect or store usernames in real-time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-white text-2xl mb-2 font-semibold">Information We Do Not Collect</h2>
          <p className="text-gray-300 text-lg">
            We do <strong>not</strong> collect, store, or track usernames or any personally identifiable information (PII) in real-time when you interact with our platform. Your activity remains anonymous, and no identifying information is stored on our servers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-white text-2xl mb-2 font-semibold">How We Use Your Interaction Data</h2>
          <p className="text-gray-300 text-lg">
            While usernames are not collected or stored, we may analyze <em>non-identifiable</em> usage patterns (e.g., general interaction logs, feature usage, anonymized metrics) to:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg mt-2 space-y-1">
            <li><strong>Improve User Experience:</strong> Understand how users interact with our platform in order to make it better.</li>
            <li><strong>Support Educational and Research Goals:</strong> Use aggregate, non-personal data for academic, development, or research purposes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-white text-2xl mb-2 font-semibold">Data Security</h2>
          <p className="text-gray-300 text-lg">
            Although we do not store usernames, we are committed to securing any general interaction data that may be temporarily processed. We employ appropriate safeguards to protect the integrity and confidentiality of all data we handle.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-white text-2xl mb-2 font-semibold">No Data Sharing</h2>
          <p className="text-gray-300 text-lg">
            Since we do not collect usernames, there is no data to share, sell, or rent to third parties for marketing or other purposes. Any insights derived from anonymized data are used internally or for educational purposes only.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-white text-2xl mb-2 font-semibold">Your Consent</h2>
          <p className="text-gray-300 text-lg">
            By using our platform, you acknowledge and agree to this Privacy Policy. If our data practices change in the future, we will update this policy and notify users accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl mb-2 font-semibold">Contact Us</h2>
          <p className="text-gray-300 text-lg">
             If you have any questions about this Privacy Policy, please ping me on Twitter (Now X).
          </p>
        </section>
      </div>
    </>
  )
}
