// import React from 'react'

import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <br />
      <div className="mx-3 rounded-lg border px-3 py-3 md:px-5">
        <h1 className="text-2xl">This is a test task for tvory.tech</h1>
        <br />
        <p>
          <Link
            href="https://maxuapro.netlify.app/"
            target="_blank"
            className="rounded-lg border px-8 py-3 text-xl hover:opacity-60"
          >
            by maxuapro
          </Link>
        </p>

        <br />
        <h1 className="text-xl">
          Project Title: Personalized Invite Platform (Frontend)
        </h1>
        <br />
        <h1 className="text-xl">Objective:</h1>
        <p>Develop a front-end web platform where users can:</p>
        <p>
          Create Personalized Invites: Add recipients (email or mobile) Add
          personalized messages and event details (e.g., date, time, location).
        </p>
        <p>
          Manage Invites: View a list of created invitations. Edit or delete
          existing invitations. Track the status of sent invitations (e.g.,
          draft, sent, opened).
        </p>
        <p>*create/edit should be a separate page, not a modal</p>
        <br />
        <h1 className="text-xl">Technical Requirements:</h1>
        <ul className="list-inside list-disc">
          <li>
            Next.js Framework: Utilize Next.js for routing, server-side
            rendering (SSR).
          </li>
          <li>
            React: Build reusable and well-structured React components for
            different sections of the platform.
          </li>
          <li>
            State Management: Choose an appropriate state management solution
            (e.g., React Context, Redux, Zustand) to handle invite data and UI
            interactions.
          </li>
          <li>API Integration: Use mocked data</li>
          <li>Styling: Apply any library of your choice if needed</li>
          <li>
            Testing (Optional): Write unit or integration tests to ensure
            component functionality and data flow.
          </li>
        </ul>
        <br />
        <h1 className="text-xl">Evaluation Criteria:</h1>
        <ul className="list-inside list-disc">
          <li>
            Component Structure: Clear separation of concerns, reusable
            components, logical organization.
          </li>
          <li>
            Code Quality: Clean, readable, well-documented code adhering to best
            practices.
          </li>
          <li>
            State Management: Effective use of state management to maintain data
            consistency and handle UI updates.
          </li>
          <li>
            Styling (Optional): Visually pleasing design that aligns with the
            projects purpose.
          </li>
          <li>
            Bonus Points: Responsive design for various screen sizes.
            Accessibility considerations. Creative features beyond the basic
            requirements.
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <h1>Ok, so I did it using:</h1>
        <ul className="list-inside list-disc">
          <li>next.js</li>
          <li>tailwind</li>
          <li>common Context API from React</li>
        </ul>
        <br />
        <br />
        <div className="flex flex-col items-center justify-center gap-3">
          <Link
            href="/invites"
            className="rounded-lg bg-gradient-to-tl from-fuchsia-500 to-indigo-600 px-8 py-3 text-white"
          >
            Check it out!
          </Link>
          <Link
            href="https://github.com/maxuapro/tvory-test"
            target="_blank"
            className="rounded-lg bg-gradient-to-br from-sky-500 to-green-500 px-8 py-3 text-white"
          >
            Github code
          </Link>
          <Link
            href="https://maxuapro.netlify.app/"
            target="_blank"
            className="rounded-lg border px-8 py-3 text-xl hover:opacity-60"
          >
            maxuapro
          </Link>
        </div>
        <br />
        <br />
      </div>
      <br />
    </div>
  );
};

export default AboutPage;
