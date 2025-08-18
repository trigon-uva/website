import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Rush() {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rush-hero.jpg"
            alt="Trigon Rush Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            Join Trigon
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto py-20 px-4">
        {/* Interest Section */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Ready to Rush?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Trigon is looking for the next generation of leaders, scholars, and friends. Fill out our interest form to stay updated on our recruitment events.
          </p>
          <a
            href="https://forms.gle/jTYnkCXaohmWQ8NB9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-primary-dark transition-colors"
          >
            Interest Form
          </a>
        </section>

        {/* Rush Calendar Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Rush Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/bodos.jpg" alt="Bodo's Bagels" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bodo&apos;s on the E-Way</h3>
                <p className="text-gray-600 mb-4">Sept 1st, 9am-12pm @ Darden Courtyard</p>
                <p className="text-gray-700">Start your day with free bagels and coffee while meeting the brothers of Trigon.</p>
              </div>
            </div>
            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/around-the-world.jpg" alt="Around the World Party" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Around the World</h3>
                <p className="text-gray-600 mb-4">Sept 5th, 10pm @ 121 Shamrock Rd</p>
                <p className="text-gray-700">Our first open party of the semester. Come for a night of fun and music.</p>
              </div>
            </div>
            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/canes.jpg" alt="Canes and Games" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Canes & Games</h3>
                <p className="text-gray-600 mb-4">Sept 10th, 5pm-8pm @ 17 West Lawn</p>
                <p className="text-gray-700">Enjoy some Raising Cane&apos;s chicken and play lawn games with the brothers.</p>
              </div>
            </div>
            {/* Event 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/seven-deadly-sins.jpg" alt="7 Deadly Sins Party" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">7 Deadly Sins</h3>
                <p className="text-gray-600 mb-4">Sept 12th, 10pm @ 121 Shamrock Rd</p>
                <p className="text-gray-700">Our second open party. Come for another great night at the Trigon house.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Do I have to attend every rush event?</h3>
              <p className="text-gray-700">No, you only need to attend one event to be considered for a bid. However, we encourage you to come to as many as you can to get to know us better!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Is Trigon a fraternity?</h3>
              <p className="text-gray-700">Trigon is a registered CIO (Contracted Independent Organization) at UVA, not a traditional social fraternity. Many of our members are also in social fraternities or sororities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What is the time commitment?</h3>
              <p className="text-gray-700">The time commitment is what you make of it. We have weekly meetings and a variety of events throughout the year, including social gatherings, service opportunities, and intramural sports.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-dark text-white mt-auto py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Trigon Engineering Society</h3>
            <p className="text-gray-400">121 Shamrock Road, Charlottesville, VA</p>
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/members" className="hover:text-primary">Members</Link>
            <Link href="/rush" className="hover:text-primary">Recruitment</Link>
            <a href="https://instagram.com/trigonatuva" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
