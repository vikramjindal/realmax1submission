import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Linkedin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const teamMembers = [
  {
    name: "Loveleen",
    role: "Real Estate Professional",
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/loveleen-affabf2.png",
    phone: "(416) 555-0101",
    email: "loveleen@remaxexcellence.ca"
  },
  {
    name: "Shizu",
    role: "Real Estate Professional", 
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/shizu-25638c3.png",
    phone: "(416) 555-0102",
    email: "shizu@remaxexcellence.ca"
  },
  {
    name: "Aman",
    role: "Real Estate Professional",
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/aman-d1be173.png",
    phone: "(416) 555-0103", 
    email: "aman@remaxexcellence.ca"
  },
  {
    name: "Gurv",
    role: "Real Estate Professional",
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/gurv-836439f.png",
    phone: "(416) 555-0104",
    email: "gurv@remaxexcellence.ca"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Meet Our <span className="text-primary">Excellence</span> Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arial">
            Our dedicated professionals are here to guide you through every step of your real estate journey with expertise and personalized service.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="card-remax group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 font-arial">
                      {member.role}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={`tel:${member.phone}`}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                        title={`Call ${member.name}`}
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors duration-200"
                        title={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a 
                        href="#"
                        className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                        title={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;