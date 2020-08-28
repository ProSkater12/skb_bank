<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:ns1="ns1:test" xmlns:ns2="ns2:test">
     <xsl:output method="xml"/>

  <xsl:template match="/" copy-namespaces="no">
    <xsl:element name="output">
      <xsl:for-each select="ns1:input/ns1:element">

        <xsl:element name="element">
          <xsl:attribute name="id"><xsl:value-of select="@id"/></xsl:attribute>
          <xsl:variable name="el_id" select="@id"/>

          <xsl:for-each select="*">
            <xsl:variable name="a" select="."/>
            <xsl:element name="{local-name()}" copy-namespaces="no">

              <xsl:attribute name="element_id">
                <xsl:value-of select="$el_id"/>
              </xsl:attribute>
              <xsl:value-of select="$a"/>
            </xsl:element>
          </xsl:for-each>
        </xsl:element>
      </xsl:for-each>
    </xsl:element>
  </xsl:template>

</xsl:stylesheet>
