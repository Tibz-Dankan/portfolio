import { html, useEffect, useState, getRef } from "z-js-framework";
import projectJson from "../data/projects.json";
import technologyJson from "../data/technologies.json";
import { ProjectWidget } from "../components/ProjectWidget";
import { AnimatedCircle } from "../components/AnimatedCircle";

export default function Home() {
  const projects = projectJson.data;
  const technologies = technologyJson.data;

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
          styles: project.styles,
        })
      );
    });
  };

  const loadTechnologies = () => {
    const technologyRef = getRef("techRef");

    technologies.forEach((technology) => {
      technologyRef.appendChild(
        html`<div class="border-[1px] border-gray-700 rounded-lg p-2 space-x-2">
            <span>Icon</span>
            <span class="text-lg"> ${technology.name} </span>
          </div>
          ,`
      );
    });
  };

  const UI = html`
    <main class="w-full flex-col space-y-16">
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
        <div
          class="w-3/5 h-1/2 flex flex-col sm:flex-row justify-center gap-4 
           border-[1px] border-gray-700 rounded-lg p-4"
        >
          <!-- <p>Hi there</p>
          <p class="text-4xl">
            <span
              >Bring that idea to life by designing, collaborating and coding
              with Dankan
            </span>
          </p> -->
          <div class="flex flex-col justify-center">
            <p class="text-lg">
              I'm a full-stack engineer with a strong focus on the backend,
              skilled in Golang and Node.js. I’m passionate about leveraging
              modern front-end tools such as React, Next.js, and TailwindCSS to
              build comprehensive and user-friendly solutions.
            </p>
            <button
              class="rounded-lg px-4 py-4  self-end space-x-2
              border-[1px] border-gray-700"
            >
              <span> Message </span>
              <span class="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg">
                Icon
              </span>
            </button>
          </div>
          <img
            src="images/dankan.png"
            alt="profile"
            class="w-1/4s w-auto h-autos h-full aspect-[1/1] lg:w-3/5s lg:h-3/5s rounded-lg
            shadow-md"
          />
        </div>
        <!-- <div class="w-full flex items-center justify-center bg-green-400">
          <img
            src="images/dankan.png"
            alt="profile"
            class="w-4/5 h-4/5 lg:w-3/5 lg:h-3/5 rounded-[50%]"
          />
        </div> -->
      </header>

      <section class="py-4 px-4 sm:px-8 lg:px-12 2xl:px-32 space-y-8">
        <div>
          <p class="text-2xl font-semibold">Tools and Technologies</p>
        </div>
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-3 gap-4"
          ref="techRef"
        ></div>
      </section>

      <!-- <section
        class="w-full flex items-center justify-center h-[90vh] bg-[rgba(28,126,214,0.05)]
         py-4 px-4 sm:px-8 lg:px-12 2xl:px-32"
      >
        <div class="w-full flex items-center justify-center gap-32">
          <div class="flex flex-col items-center justify-center gap-2">
            <span>Idea</span>
            ${AnimatedCircle()}
          </div>
          <div class="flex flex-col items-center justify-center gap-2">
            <span>Design</span>
            ${AnimatedCircle()}
          </div>
          <div class="flex flex-col items-center justify-center gap-2">
            <span>Code</span>
            ${AnimatedCircle()}
          </div>
        </div>
      </section> -->

      <section class="py-4 px-4 sm:px-8 lg:px-12 2xl:px-32 space-y-8">
        <div>
          <p class="text-2xl font-semibold">Projects</p>
        </div>
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
    loadTechnologies();
  }, []);

  return UI;
}
