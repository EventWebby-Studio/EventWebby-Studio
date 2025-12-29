import RsvpForm from "../../components/layout/RsvpForm";
export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">
        Build a RSVP event website Faster with InviteFlow
      </h1>
      <p className="text-gray-600 mb-8">
        An agency-ready fullstack boilerplate with RSVP functionality.
      </p>
      <a
        href="/login"
        className="btn inline-block"
      >
        Get Started
      </a>

      <RsvpForm></RsvpForm>
    </section>
  )
}
