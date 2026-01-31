import React from 'react';
import { Code, Coffee, Music, TowerControl as GameController2, Book, Zap } from 'lucide-react';
import { asciiArt } from '../../data/portfolioData';

export const WhoAmI: React.FC = () => {
  return (
    <div className="whoami-section">
      <div className="mb-6">
        <pre className="text-terminal-accent text-xs mb-4 overflow-x-auto">
          {asciiArt.whois}
        </pre>
        <div className='flex gap-4 items-center'>
          <img src="https://i.ibb.co/KxnXs1qx/rrrr.jpg" alt="rrrr" className="w-10 h-10 rounded-full mb-4 border-2 border-terminal-accent" />
        <h2 className="text-terminal-accent text-xl font-bold mb-2"> About Me</h2>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-terminal-hover p-6 rounded-lg border border-terminal-border">
            <h3 className="text-terminal-accent font-bold text-lg mb-3">$ whoami</h3>
            <div className="space-y-4 text-terminal-text">
             <p>
  Hi there! I'm Ezra Ndege Alias Dezmils a dedicated <span className="text-terminal-accent">Full-Stack Developer</span> who blends creativity with logic to build meaningful digital experiences. My background in <span className="text-terminal-accent">graphic design</span> taught me the importance of aesthetics and user-centered design, while my love for <span className="text-terminal-accent">mathematics</span> sharpened my problem-solving skills and logical thinking.
</p>
<p>
  What started as a fascination with visual storytelling and the patterns behind numbers gradually evolved into a passion for technology. Today, I enjoy designing sleek interfaces, architecting scalable systems, and transforming complex challenges into simple, intuitive solutions.
</p>
<p>
  Beyond coding, I’m constantly exploring new tools, experimenting with creative ideas, and sharing knowledge with the community. Whether it’s refining a design, solving an algorithm, or contributing to open-source, I thrive at the intersection of creativity and computation.
</p>

            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-terminal-hover p-4 rounded-lg border border-terminal-border">
              <h4 className="text-terminal-accent font-bold mb-2 flex items-center">
                <Zap size={16} className="mr-2" />
                Core Values
              </h4>
              <ul className="text-terminal-text text-sm space-y-1">
                <li>• Clean, maintainable code</li>
                <li>• User-centered design</li>
                <li>• Continuous learning</li>
                <li>• Open collaboration</li>
              </ul>
            </div>
            
            <div className="bg-terminal-hover p-4 rounded-lg border border-terminal-border">
              <h4 className="text-terminal-accent font-bold mb-2 flex items-center">
                <Code size={16} className="mr-2" />
                Specializations
              </h4>
              <ul className="text-terminal-text text-sm space-y-1">
                <li>• React & TypeScript</li>
                <li>• Node.js & Express.js</li>
                <li>• MongoDB & Mongoose</li>
                <li>• Graphic Design & UI/UX</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Side Info */}
        <div className="space-y-6">
          <div className="bg-terminal-hover p-4 rounded-lg border border-terminal-border">
            <h4 className="text-terminal-accent font-bold mb-3">$ ls ~/interests</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Coffee className="text-terminal-accent" size={16} />
                <span className="text-terminal-text text-sm">Machine Learning enthusiast ☕</span>
              </div>
              <div className="flex items-center space-x-2">
                <Music className="text-terminal-accent" size={16} />
                <span className="text-terminal-text text-sm">SDA Gospel Music over 🎵</span>
              </div>
              <div className="flex items-center space-x-2">
                <GameController2 className="text-terminal-accent" size={16} />
                <span className="text-terminal-text text-sm">Play station gamer 🎮</span>
              </div>
              <div className="flex items-center space-x-2">
                <Book className="text-terminal-accent" size={16} />
                <span className="text-terminal-text text-sm">Tech Study Jam  📚</span>
              </div>
            </div>
          </div>

          <div className="bg-terminal-hover p-4 rounded-lg border border-terminal-border">
            <h4 className="text-terminal-accent font-bold mb-3">$ cat ~/status.txt</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-terminal-muted">Status:</span>
                <span className="text-green-500">Available for hire</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal-muted">Location:</span>
                <span className="text-terminal-text">Maseno University, Kisumu</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal-muted">Timezone:</span>
                <span className="text-terminal-text">EAT (UTC+3)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal-muted">Competence Level:</span>
                <span className="text-terminal-accent">████████░░90%</span>
              </div>
            </div>
          </div>

          <div className="bg-terminal-hover p-4 rounded-lg border border-terminal-border">
            <h4 className="text-terminal-accent font-bold mb-3">$ uptime</h4>
            <div className="text-terminal-text text-sm">
              <div>Years coding: <span className="text-terminal-accent">5+</span></div>
              <div>Projects completed: <span className="text-terminal-accent">15+</span></div>
              <div>Tech life impacted: <span className="text-terminal-accent">∞</span></div>
              <div>Bugs fixed: <span className="text-terminal-accent">9,999+</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-terminal-hover rounded border-l-4 border-terminal-accent">
        <p className="text-terminal-muted text-sm">
          💡 <span className="text-terminal-accent">Fun fact:</span> I built this entire terminal interface 
          because I believe portfolios should be as unique as the developers who create them. 
          Every command you see here was crafted with attention to detail and a love for great UX.
        </p>
      </div>
    </div>
  );
};