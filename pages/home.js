import { html, useEffect, useState, getRef } from "z-js-framework";
import projectJson from "../data/projects.json";
import { ProjectWidget } from "../components/ProjectWidget";

export default function Home() {
  const projects = projectJson.data;

  const loadProjects = () => {
    const projectRef = getRef("projectRef");

    projects.forEach((project) => {
      projectRef.appendChild(
        ProjectWidget({
          name: project.name,
          logo: project.logo,
          url: project.url,
          github_url: project.github_url,
          title: project.title,
          description: project.description,
          cover_image_url: project.cover_image_url,
          image_slide_urls: project.image_slide_urls,
          video_url: project.video_url,
          technologies: project.technologies,
        })
      );
    });
  };

  const UI = html`
    <main class="w-full flex-col">
      <nav
        class="flex items-center bg-[rgba(0,0,0,0.0)] justify-between
        gap-4 py-4 px-4 sm:px-8 lg:px-12 2xl:px-32"
      >
        <h1 class="font-bold text-2xl text-gray-100">Tibesigwa Dankan</h1>
        <ul class="flex items-center justify-end gap-4">
          <li>
            <img
              src="/public/icons/github.svg"
              alt="Github Icon"
              class="size-7"
            />
          </li>
          <li>
            <img
              src="/public/icons/linkedin.svg"
              alt="LinkedIn Icon"
              class="size-6"
            />
          </li>
          <li>
            <img
              src="/public/icons/twitter.svg"
              alt="Twitter Icon"
              class="size-6"
            />
          </li>
          <li>
            <img
              src="/public/icons/gmail.svg"
              alt="Gmail Icon"
              class="size-6"
            />
          </li>
        </ul>
      </nav>
      <header
        class="w-full flex items-center bg-[rgba(0,0,0,0.0)] justify-center
         gap-32 py-4 px-4 sm:px-8 lg:px-12 2xl:px-32 h-[80vh]"
      >
        <div class="w-full flex flex-col justify-center">
          <p>Hi there</p>
          <p class="text-4xl">
            <span
              >Bring that idea to life by designing, collaborating and coding
              with Dankan
            </span>
          </p>
        </div>
        <div class="w-full flex items-center justify-center bg-green-400s">
          <img
            src="images/dankan.png"
            alt="profile"
            class="w-4/5 h-4/5 lg:w-3/5 lg:h-3/5 rounded-[50%]"
          />
        </div>
      </header>
      <section
        class="w-full flex items-center justify-center h-[30vh] bg-[rgba(28,126,214,0.05)]
         py-4 px-4 sm:px-8 lg:px-12 2xl:px-32"
      >
        Animated diagrams
      </section>

      <section
        class="w-full flex items-center justify-center py-4 px-4 sm:px-8 lg:px-12 2xl:px-32"
      >
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          ref="projectRef"
        ></div>
      </section>

      <footer class="w-full flex items-center justify-center">Footer</footer>
    </main>
  `;

  useEffect(() => {
    loadProjects();
  }, []);

  return UI;
}
