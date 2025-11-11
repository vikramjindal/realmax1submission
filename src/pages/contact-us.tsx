import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useJoinUsModal } from '@/contexts/JoinUsModalContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Building2,
  Users,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUs = () => {
  const { openModal } = useJoinUsModal();
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

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-red-600" />,
      title: "Phone",
      details: [
        { label: "Mississauga", value: "(905) 507-4436" },
        { label: "Brampton", value: "519-342-1961" }
      ],
      action: "Call Now"
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email",
      details: [
        { label: "General Inquiries", value: "info@remaxexcellence.ca" },
        { label: "Support", value: "support@remaxexcellence.ca" }
      ],
      action: "Send Email"
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Offices",
      details: [
        { label: "Mississauga", value: "100 Milverton Dr #610, Mississauga, ON L6R 4H1" },
        { label: "Brampton", value: "456 Vodden St E #21b, Brampton, ON L6S 5Y7" }
      ],
      action: "Get Directions"
    }
  ];

  const departments = [
    {
      name: "Sales Team",
      description: "For buying and selling inquiries",
      contact: "sales@remaxexcellence.com",
      icon: <Users className="h-6 w-6 text-red-600" />
    },
    {
      name: "Marketing Services",
      description: "For marketing and design requests",
      contact: "marketing@remaxexcellence.com",
      icon: <Globe className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Training & Development",
      description: "For agent training programs",
      contact: "training@remaxexcellence.com",
      icon: <Building2 className="h-6 w-6 text-green-600" />
    },
    {
      name: "Pre-Construction",
      description: "For pre-construction projects",
      contact: "precon@remaxexcellence.com",
      icon: <Building2 className="h-6 w-6 text-purple-600" />
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | RE/MAX Excellence</title>
        <meta name="description" content="Get in touch with RE/MAX Excellence. Contact our team for all your real estate needs, from buying and selling to marketing services and training programs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          {/* Creative Balloon Elements */}
          <div className="absolute top-16 left-12 w-28 h-28 object-contain opacity-70 animate-bounce shadow-2xl transform -rotate-12">
            <Image src="/images/balloon.png" alt="RE/MAX Balloon" width={112} height={112} className="w-full h-full" />
          </div>
          <div className="absolute top-24 right-20 w-20 h-20 object-contain opacity-60 animate-pulse shadow-xl transform rotate-45">
            <Image src="/images/balloon.png" alt="RE/MAX Balloon" width={80} height={80} className="w-full h-full" />
          </div>
          <div className="absolute bottom-16 left-1/3 w-16 h-16 object-contain opacity-50 animate-bounce shadow-lg transform rotate-90">
            <Image src="/images/balloon.png" alt="RE/MAX Balloon" width={64} height={64} className="w-full h-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-semibold mb-6">
                Get In Touch
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
                Contact <span className="text-red-400">RE/MAX Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We're here to help with all your real estate needs. Get in touch with our team today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-montserrat">
                Multiple Ways to <span className="text-red-600">Connect</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the method that works best for you. Our team is ready to assist with any questions or needs.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200"
                >
                  <div className="flex justify-center mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{method.title}</h3>
                  <div className="space-y-3 mb-6">
                    {method.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-center">
                        <div className="text-sm font-semibold text-slate-600 mb-1">{detail.label}</div>
                        <div className="text-slate-800 font-medium">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                  <Button onClick={openModal} className="w-full bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                    {method.action}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-montserrat">
                Send Us a <span className="text-red-600">Message</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-center rounded-t-xl">
                  <CardTitle className="text-2xl font-bold">Contact Form</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                        <option value="">Select a department</option>
                        <option value="sales">Sales Team</option>
                        <option value="marketing">Marketing Services</option>
                        <option value="training">Training & Development</option>
                        <option value="precon">Pre-Construction</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>

                    <Button className="w-full bg-brand-bright-red hover:bg-brand-dark-red text-white py-4 text-lg font-bold">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-montserrat">
                Contact <span className="text-red-600">Specific Departments</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get in touch with the right team for your specific needs and inquiries.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {dept.icon}
                    <h3 className="text-xl font-bold text-slate-900">{dept.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{dept.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-semibold">{dept.contact}</span>
                    <Button onClick={openModal} className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold">
                      Contact
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 font-montserrat">
                Visit Our <span className="text-red-400">Office</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Come see us in person and experience the RE/MAX Excellence difference.
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-8 w-8 text-red-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Mississauga Office</h3>
                      <p className="text-gray-300">
                        100 Milverton Dr #610<br />
                        Mississauga, ON L6R 4H1<br />
                        Canada
                      </p>
                      <a href="tel:9055074436" className="text-brand-bright-red hover:text-white transition-colors mt-2 inline-block">(905) 507-4436</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-8 w-8 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Brampton Office</h3>
                      <p className="text-gray-300">
                        456 Vodden St E #21b<br />
                        Brampton, ON L6S 5Y7<br />
                        Canada
                      </p>
                      <a href="tel:5193421961" className="text-brand-bright-red hover:text-white transition-colors mt-2 inline-block">519-342-1961</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-8 w-8 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-32 h-32 object-contain opacity-60 animate-pulse shadow-xl transform rotate-12 absolute -top-8 -left-8">
                  <Image src="/images/balloon.png" alt="RE/MAX Balloon" width={128} height={128} className="w-full h-full" />
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-blue-900/20 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Why Visit Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-gray-300">Meet our team in person</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-gray-300">View property listings</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-gray-300">Discuss your needs face-to-face</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-gray-300">Experience our culture</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

