import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const infoSections = [
  {
    title: 'Direct Lines',
    items: [
      { icon: Mail, label: 'EMAIL US', value: 'hello@Alvestudio.com' },
      { icon: Phone, label: 'CALL US', value: '+1 (555) 0123–4567' },
    ],
  },
  {
    title: 'Our Studio',
    items: [
      {
        icon: MapPin,
        label: 'HEADQUARTERS',
        value: '742 Innovation Drive, Suite 400\nTech District, Austin, TX 78701',
      },
      {
        icon: Clock,
        label: 'STUDIO HOURS',
        value: 'Monday – Friday\n9:00 AM – 6:00 PM CST',
      },
    ],
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {infoSections.map((section) => (
        <div key={section.title} className="bg-surface rounded-radius-card rounded-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold uppercase tracking-wider text-purple-ink mb-4">
            {section.title}
          </h3>
          <div className="space-y-6">
            {section.items.map((item) => (
              <div key={item.label} className="flex items-start gap-4 ">
                <item.icon className="h-10 w-10 text-purple-mid shrink-0 mt-0.5 bg-[#45228A1A] p-2 rounded" />
                <div>
                  <p className="text-sm font-medium text-purple-mid uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-[#333] text-xs whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="bg-[#EADEF4] rounded-radius-card rounded-sm border border-gray-200 p-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.940644922212!2d3.9703220760230935!3d7.360550612868472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed45137ea7f7%3A0xcc1375193f56e3ad!2sIbadan%20Airport!5e0!3m2!1sen!2sng!4v1786058753674!5m2!1sen!2sng" width="310" height="250" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </div>
  );
}