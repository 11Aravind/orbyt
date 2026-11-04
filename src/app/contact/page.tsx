"use client";

import { useState, type FormEvent } from "react";
import { SubpageLayout } from "@/components/SubpageLayout";
import { ArrowUpRight, Mail, ShieldCheck, Code2 } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return <SubpageLayout kicker="Contact ORBYT" title="Tell us what you're working towards." description="Share a little about your product, security or development needs. This prototype form demonstrates the experience; it does not send data to a server yet.">
    <div className="grid-2" style={{alignItems:"start"}}>
      <div><h2 style={{fontSize:28}}>Let's start a conversation.</h2><p className="section-copy">Choose the area closest to your needs and tell us what a good outcome would look like.</p><div style={{display:"grid",gap:18,marginTop:30}}><div style={{display:"flex",gap:12,alignItems:"center"}}><Code2 color="#6e9347"/><span style={{fontSize:13}}>Software & development</span></div><div style={{display:"flex",gap:12,alignItems:"center"}}><ShieldCheck color="#6e9347"/><span style={{fontSize:13}}>Security services</span></div><div style={{display:"flex",gap:12,alignItems:"center"}}><Mail color="#6e9347"/><span style={{fontSize:13}}>Product information</span></div></div></div>
      <form className="contact-form card" style={{padding:25}} onSubmit={handleSubmit}>
        {sent ? <div className="form-success">Thanks for your interest. This is a frontend demo, so your message has not been sent. Connect a backend or form service to enable submissions.</div> : <>
          <label>Your name<input required name="name" placeholder="Enter your name"/></label>
          <label>Email address<input required type="email" name="email" placeholder="you@company.com"/></label>
          <label>What can we help with?<select name="service" defaultValue="Software development"><option>Software development</option><option>Security services</option><option>Software product enquiry</option><option>Something else</option></select></label>
          <label>Tell us a little more<textarea required name="message" placeholder="Describe your project or question..."/></label>
          <button className="btn btn-dark" type="submit">Send enquiry <ArrowUpRight size={15}/></button>
        </>}
      </form>
    </div>
  </SubpageLayout>;
}
