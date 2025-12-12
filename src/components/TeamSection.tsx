import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { TeamMember, getFeaturedImageUrl } from '@/lib/wordpress';

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

// Fallback team members if WordPress data is not available
const fallbackTeamMembers = [
  {
    name: "Aman Bhandaal",
    role: "Broker/Owner",
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/aman-d1be173.png",
    phone: "+1 (416) 520-3462",
    email: "aman@remaxex.com",
    instagram: "https://www.instagram.com/aman.bhandaal/?hl=en",
    linkedin: "https://www.linkedin.com/in/aman-bhandaal-703562219/?originalSubdomain=ca"
  },
  {
    name: "Gurv Dhillon",
    role: "Broker of Record",
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/gurv-836439f.png",
    phone: null,
    email: "gurv@remaxex.com",
    instagram: "https://www.instagram.com/gdhillon.remax/?hl=en",
    linkedin: "https://www.linkedin.com/in/gurv-dhillon-b40723164/?originalSubdomain=ca"
  },
  {
    name: "Shizu Asai",
    role: "Director of Operations", 
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/shizu-25638c3.png",
    phone: null,
    email: "shizu@remaxex.com",
    instagram: null,
    linkedin: "https://www.linkedin.com/company/remax-excellence-realty-brokerage/"
  },
  {
    name: "Lovleen Hundal",
    role: "Deals Manager",
    image: "https://assets.co.dev/910e4b67-1d47-4112-8d57-8a5231718f2f/loveleen-affabf2.png",
    phone: null, 
    email: "alldeals@remaxex.com",
    instagram: null,
    linkedin: "https://www.linkedin.com/company/remax-excellence-realty-brokerage/"
  },
  {
    name: "Nikita Suri",
    role: "Marketing Manager",
    image: "https://dontdelete2005142.kloudbean.com/1762973954_Nikita Suri.png",
    phone: null,
    email: "marketing@remaxex.com",
    instagram: null,
    linkedin: "https://www.linkedin.com/company/remax-excellence-realty-brokerage/"
  }
];

interface TeamSectionProps {
  teamMembers?: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers: wpTeamMembers }) => {
  // Convert WordPress team members to format expected by component
  const teamMembers = wpTeamMembers && wpTeamMembers.length > 0
    ? wpTeamMembers.map(member => ({
        name: member.title.rendered,
        role: member.team_role || '',
        image: getFeaturedImageUrl(member) || '',
        phone: member.team_phone,
        email: member.team_email || '',
        instagram: member.team_instagram,
        linkedin: member.team_linkedin
      }))
    : fallbackTeamMembers;
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
            Meet Our <span className="text-brand-bright-red">Excellence</span> Team
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <Card className="card-remax group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={300}
                      height={320}
                      className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'top center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 font-montserrat min-h-[3.5rem] flex items-center justify-center">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 font-arial">
                        {member.role}
                      </p>
                    </div>
                    
                    <div className="flex justify-center space-x-3">
                      {member.phone && (
                        <a 
                          href={`tel:${member.phone}`}
                          className="p-2 rounded-full bg-brand-bright-red/10 text-brand-bright-red hover:bg-brand-bright-red hover:text-white transition-colors duration-200"
                          title={`Call ${member.name}`}
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                      )}
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-brand-medium-blue/10 text-brand-medium-blue hover:bg-brand-medium-blue hover:text-white transition-colors duration-200"
                        title={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      {member.instagram && (
                        <a 
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-purple-600 hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors duration-200"
                          title={`${member.name} on Instagram`}
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-brand-dark-blue/10 text-brand-dark-blue hover:bg-brand-dark-blue hover:text-white transition-colors duration-200"
                          title={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
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