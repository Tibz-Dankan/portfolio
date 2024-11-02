import { html, useEffect, useState, getRef } from "z-js-framework";
import projectJson from "../data/projects.json";
import technologyJson from "../data/technologies.json";
import { ProjectWidget } from "../components/ProjectWidget";
import { HeroBg } from "../components/HeroBg";
import { Header } from "../components/Header";

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
        html`<div
            class="w-44s flex items-center border-[1px] border-gray-700 rounded-lg p-2 space-x-4"
          >
            <span>
              <img
                src="${technology.icon}"
                alt="${technology.name} Icon"
                class="size-7"
            /></span>
            <span class="text-base"> ${technology.name}</span>
          </div>
          ,`
      );
    });
  };

  const UI = html`
    <main class="w-full flex-col space-y-16 relative overflow-x-hidden">
      ${html`<div class="w-full h-auto">${HeroBg({ content: Header() })}</div>`}
      <section
        class="flex flex-col items-center py-4 px-4 sm:px-8 
        lg:px-12 2xl:px-32 space-y-8"
      >
        <div>
          <p class="text-2xl font-semibold">Tools and Technologies</p>
        </div>
        <div
          class="w-full grid grid-cols-1 sm:grid-cols-3 gap-4"
          ref="techRef"
        ></div>
      </section>

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
