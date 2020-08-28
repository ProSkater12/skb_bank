<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:ns1="ns1:test" xmlns:ns2="ns2:test">
     <xsl:output method="xml"/>

   <xsl:template match="/">
     <ns1:output xmlns:ns3="ns3:test">

       <xsl:for-each select="ns1:input/ns1:element">
         <xsl:variable name="el_id" select="@id"/>
         <xsl:copy>
           <xsl:attribute name="id">
             <xsl:value-of select="$el_id"/>
           </xsl:attribute>
           <xsl:element name="ns3:concat">
             <xsl:value-of select="concat(ns2:field1, ns2:field2, ns2:field3, $el_id)"/>
           </xsl:element>
         </xsl:copy>
       </xsl:for-each>
     </ns1:output>
   </xsl:template>

</xsl:stylesheet>
